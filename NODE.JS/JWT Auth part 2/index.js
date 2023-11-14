const express = require('express');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const pgp = require('pg-promise')();

const app = express();
dotenv.config();

const db = pgp('postgres://test:test@localhost:5432/test'); 

const sql = {
    createUser: 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
    findUserByUsername: 'SELECT * FROM users WHERE username = $1',
};

db.none(`DROP TABLE IF EXISTS users;
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT
    );`
).then(() => {
    console.log('Users table created');
}).catch(error => {
    console.error('Error creating users table:', error);
});

const secret = process.env.SECRET;

const JwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};

const strategy = new JwtStrategy(JwtOptions, (jwt_payload, done) => {
    db.oneOrNone('SELECT * FROM users WHERE id = $1', jwt_payload.id)
        .then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch(error => {
            return done(error, false);
        });
});

passport.use(strategy);

app.post('/users/signup', (req, res) => {
    const { username, password } = req.body;

    db.oneOrNone(sql.findUserByUsername, username)
        .then(existingUser => {
            if (existingUser) {
                res.status(400).json({ error: 'User already exists' });
            } else {
                db.one(sql.createUser, [username, password])
                    .then(newUser => {
                        res.json({ msg: 'Signup successful. Now you can log in.' });
                    })
                    .catch(error => {
                        res.status(500).json({ error: 'Error creating user' });
                    });
            }
        })
        .catch(error => {
            res.status(500).json({ error: 'Database error' });
        });
});

app.post('/users/login', (req, res) => {
    const { username, password } = req.body;

    db.oneOrNone(sql.findUserByUsername, username)
        .then(user => {
            if (user && user.password === password) {
                const token = jwt.sign({ id: user.id, username: user.username }, secret);
                res.json({ token, id: user.id, username: user.username });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        })
        .catch(error => {
            res.status(500).json({ error: 'Error logging in' });
        });
});

app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ message: 'Protected route accessed' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

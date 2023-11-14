const express = require('express');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const dotenv = require('dotenv');
const pgp = require('pg-promise')();
const app = express();

dotenv.config();

const db = pgp('postgres://postgres:postgres@localhost:5432/test');

const sql = {
    createUser: 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    findUserById: 'SELECT * FROM users WHERE id = $1',
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
    db.oneOrNone(sql.findUserById, jwt_payload.id)
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

app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ message: 'Protected route accessed' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

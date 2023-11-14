const express = require('express');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const pgp = require('pg-promise')();
const multer = require('multer');

const app = express();
dotenv.config();

const db = pgp('postgres://username:password@localhost:5432/yourdbname');

const sql = {
    createUser: 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, token',
    findUserByUsername: 'SELECT * FROM users WHERE username = $1',
    clearUserToken: 'UPDATE users SET token=NULL WHERE id=$1'
};

const secret = process.env.SECRET;

const authorize = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (user) {
            req.user = user;
            next();
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
    })(req, res, next);
};

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

app.get('/users/logout', authorize, (req, res) => {
    const userId = req.user.id;

    db.none(sql.clearUserToken, userId)
        .then(() => {
            res.json({ message: 'User logged out' });
        })
        .catch(error => {
            res.status(500).json({ error: 'Error logging out' });
        });
});

app.get('/protected', authorize, (req, res) => {
    res.json({ message: 'Protected route accessed' });
});

const upload = multer({ dest: 'uploads/' });
app.post('/planets/:id/image', authorize, upload.single('image'), (req, res) => {
    if (req.file) {
        const planetId = req.params.id;
        db.none('UPDATE planets SET image=$1 WHERE id=$2', [req.file.path, planetId])
        res.json({ message: 'File uploaded successfully' });
    } else {
        res.status(400).json({ error: 'No file uploaded' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

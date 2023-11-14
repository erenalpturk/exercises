const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:postgres@localhost:5432/test'); // Replace with your PostgreSQL connection details

// SQL queries
const sql = {
    getAllPlanets: 'SELECT * FROM planets',
    getPlanetById: 'SELECT * FROM planets WHERE id=$1',
    createPlanet: 'INSERT INTO planets (name) VALUES ($1) RETURNING *',
    updatePlanet: 'UPDATE planets SET name=$2 WHERE id=$1 RETURNING *',
    deletePlanet: 'DELETE FROM planets WHERE id=$1 RETURNING *'
};

// Endpoint to get all planets
app.get('/planets', async (req, res) => {
    try {
        const planets = await db.any(sql.getAllPlanets);
        res.json(planets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to get a planet by ID
app.get('/planets/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const planet = await db.oneOrNone(sql.getPlanetById, +id);
        if (planet) {
            res.json(planet);
        } else {
            res.status(404).json({ message: 'Planet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to create a new planet
app.post('/planets', async (req, res) => {
    const { name } = req.body;
    try {
        const newPlanet = await db.one(sql.createPlanet, name);
        res.status(201).json(newPlanet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to update a planet by ID
app.put('/planets/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updatedPlanet = await db.oneOrNone(sql.updatePlanet, [+id, name]);
        if (updatedPlanet) {
            res.json(updatedPlanet);
        } else {
            res.status(404).json({ message: 'Planet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to delete a planet by ID
app.delete('/planets/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPlanet = await db.oneOrNone(sql.deletePlanet, +id);
        if (deletedPlanet) {
            res.json(deletedPlanet);
        } else {
            res.status(404).json({ message: 'Planet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

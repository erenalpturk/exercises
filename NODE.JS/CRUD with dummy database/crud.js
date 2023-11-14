const express = require('express');
const Joi = require('joi');

const router = express.Router();

// Dummy database of planets
let planets = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];

// Define a Joi schema for planet validation
const planetSchema = Joi.object({
  name: Joi.string().min(2).required(),
});

// Middleware to validate the planet data
const validatePlanet = (req, res, next) => {
  const { error } = planetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

// GET all planets
router.get('/api/planets', (req, res) => {
  res.status(200).json(planets);
});

// GET planet by ID
router.get('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);
  if (planet) {
    res.status(200).json(planet);
  } else {
    res.status(404).json({ error: 'Planet not found' });
  }
});

// POST a new planet
router.post('/api/planets', validatePlanet, (req, res) => {
  const newPlanet = {
    id: planets.length + 1,
    name: req.body.name,
  };
  planets.push(newPlanet);
  res.status(201).json({ msg: 'Planet created successfully' });
});

// PUT (update) a planet by ID
router.put('/api/planets/:id', validatePlanet, (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);
  if (planet) {
    planet.name = req.body.name;
    res.status(200).json({ msg: 'Planet updated successfully' });
  } else {
    res.status(404).json({ error: 'Planet not found' });
  }
});

// DELETE a planet by ID
router.delete('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const planetIndex = planets.findIndex((p) => p.id === planetId);
  if (planetIndex !== -1) {
    planets.splice(planetIndex, 1);
    res.status(200).json({ msg: 'Planet deleted successfully' });
  } else {
    res.status(404).json({ error: 'Planet not found' });
  }
});

module.exports = router;

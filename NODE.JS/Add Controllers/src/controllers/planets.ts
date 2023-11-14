import { Request, Response } from 'express';

// Dummy database of planets
let planets: any[] = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];

// Get all planets
export const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

// Get one planet by ID
export const getOneById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);
  if (planet) {
    res.status(200).json(planet);
  } else {
    res.status(404).json({ error: 'Planet not found' });
  }
};

// Create a new planet
export const create = (req: Request, res: Response) => {
  const newPlanet = {
    id: planets.length + 1,
    name: req.body.name,
  };
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: 'Planet created successfully' });
};

// Update a planet by ID
export const updateById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const updatedName = req.body.name;
  const planetIndex = planets.findIndex((p) => p.id === planetId);
  if (planetIndex !== -1) {
    planets[planetIndex].name = updatedName;
    res.status(200).json({ msg: 'Planet updated successfully' });
  } else {
    res.status(404).json({ error: 'Planet not found' });
  }
};

// Delete a planet by ID
export const deleteById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const planetIndex = planets.findIndex((p) => p.id === planetId);
  if (planetIndex !== -1) {
    planets = planets.filter((p) => p.id !== planetId);
    res.status(200).json({ msg: 'Planet deleted successfully' });
  } else {
    res.status(404).json({ error: 'Planet not found' });
  }
};

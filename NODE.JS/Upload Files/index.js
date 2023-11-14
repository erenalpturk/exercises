const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


app.post('/planets/:id/image', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const image = req.file.filename;

    try {
        const updatedPlanet = await db.oneOrNone('UPDATE planets SET image=$2 WHERE id=$1 RETURNING *', [+id, image]);
        if (updatedPlanet) {
            res.json(updatedPlanet);
        } else {
            res.status(404).json({ message: 'Planet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

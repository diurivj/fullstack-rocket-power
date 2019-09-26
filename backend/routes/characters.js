const router = require('express').Router();
const Character = require('../models/Character');

// CRUD
router.post('/characters', (req, res, next) => {
  Character.create(req.body)
    .then((character) => res.status(201).json({ character }))
    .catch((error) => res.status(500).json({ error }));
});

router.get('/characters', (req, res, next) => {
  Character.find()
    .then((characters) => res.status(200).json({ characters }))
    .catch((error) => res.status(500).json({ error }));
});

router.get('/characters/random', (req, res, next) => {
  Character.countDocuments()
    .then((number) => {
      const rnd = Math.floor(Math.random() * number);
      Character.find()
        .then((characters) => {
          res.status(200).json({ character: characters[rnd] });
        })
        .catch((err) => res.status(500).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
});

router.get('/characters/:id', (req, res, next) => {
  Character.findById(req.params.id)
    .then((character) => res.status(200).json({ character }))
    .catch((error) => res.status(500).json({ error }));
});

router.put('/characters/:id', (req, res, next) => {
  Character.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then((character) => res.status(200).json({ character }))
    .catch((error) => res.status(500).json({ error }));
});

router.delete('/characters/:id', (req, res, next) => {
  Character.findByIdAndDelete(req.params.id)
    .then((character) => res.status(200).json({ character }))
    .catch((error) => res.status(500).json({ error }));
});

module.exports = router;

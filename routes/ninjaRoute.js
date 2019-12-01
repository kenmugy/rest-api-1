const router = require('express').Router();

const ninjaRouter = (Ninja) => {
  router.get('/', (req, res) => {
    res.json({ type: 'GET' });
  });

  router.post('/', async(req, res) => {
      const ninja = new Ninja({
          name: req.body.name,
          rank: req.body.rank,
          availability: req.body.availability
      })
    res.json({ type: 'POST' });
  });

  router.put('/:id', (req, res) => {
    res.json({ type: 'PUT' });
  });

  router.delete('/:id', (req, res) => {
    res.json({ type: 'DELETE' });
  });

  return router;
};

module.exports = ninjaRouter;

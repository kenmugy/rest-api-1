const router = require('express').Router();

const ninjaRouter = Ninja => {
  router.get('/', (req, res) => {
    res.json({ type: 'GET' });
  });

  router.post('/', async (req, res) => {
    try {
      const ninja = await Ninja.create(req.body);
      res.json({ type: 'POST', status: 200, ninja });
    } catch (error) {
      res.status(400).send('error creating ninja');
    }
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

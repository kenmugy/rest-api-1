const router = require('express').Router();

const ninjaRouter = Ninja => {
  router.get('/', async (req, res) => {
    try {
      const ninjas = await Ninja.find();
      res.json({ type: 'GET', ninjas });
    } catch (err) {
      res.sendStatus(400);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const ninja = await Ninja.findById(req.params.id);
      res.json(ninja);
    } catch (error) {
      res.sendStatus(404);
    }
    // res.json({ type: 'GET' });
  });

  router.post('/', async (req, res) => {
    try {
      const ninja = await Ninja.create(req.body);
      res.json({ type: 'POST', status: 200, ninja });
    } catch (error) {
      res.status(422).send('error creating ninja');
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const ninja = await Ninja.findById(req.params);
      res.send(ninja);
    } catch (error) {
      res.sendStatus(404);
    }
    res.json({ type: 'PUT' });
  });

  router.delete('/:id', (req, res) => {
    res.json({ type: 'DELETE' });
  });

  return router;
};

module.exports = ninjaRouter;

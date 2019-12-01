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
      if (!ninja) return res.status(404).send('ninja not found');
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
      let ninja = await Ninja.findById(req.params.id);
      console.log(ninja);
      if (!ninja) return res.status(404).send('ninja not found');
      ninja.name = req.body.name;
      ninja.rank = req.body.rank;
      ninja.availability = req.body.availability;
      ninja.save();

      //   const newNinja = await ninja.save();
      res.json({ 'new ninja': ninja });
    } catch (error) {
      res.sendStatus(404);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const ninja = await Ninja.findByIdAndRemove(req.params.id);
      res.json({ type: 'DELETE', status: 200, 'ninja removed': ninja });
    } catch (error) {
      res.send(error);
    }
  });

  return router;
};

module.exports = ninjaRouter;

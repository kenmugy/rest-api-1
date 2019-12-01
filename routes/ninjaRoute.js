const router = require('express').Router();

const ninjaRouter = () => {
  router.get('/', (req, res) => {
    res.json({ type: 'GET' });
  });

  router.post('/', (req, res) => {
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

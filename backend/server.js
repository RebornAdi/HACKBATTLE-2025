const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev, dir: path.resolve(__dirname, '../frontend') });

const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    return nextApp.render(req, res, '/', req.query);
  });

  server.get('/api/data', (req, res) => {
    res.json({ message: 'This data came from the Express backend!' });
  });

  server.all('/*any', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

}).catch(err => {
    console.error('Error starting server:', err.stack);
    process.exit(1);
});
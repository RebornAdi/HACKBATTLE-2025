const express = require('express');
const next = require('next');
const path = require('path');

// Determine if the environment is development or production
const dev = process.env.NODE_ENV !== 'production';

// The path to the Next.js app is relative to where you run the script.
// Assuming you run `node backend/server.js` from the root directory.
const nextApp = next({ dev, dir: path.resolve(__dirname, '../frontend') });

// Get the Next.js request handler
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Create the Express server
  const server = express();

  // You can define custom Express API routes here
  // These will be handled by Express before Next.js gets the request

  server.get('/', (req, res) => {
    // The first argument is the Next.js page to render.
    // In the App Router, this corresponds to the folder structure.
    // For the homepage, the page is just '/'.
    return nextApp.render(req, res, '/', req.query);
  });

  server.get('/api/data', (req, res) => {
    res.json({ message: 'This data came from the Express backend!' });
  });

  // For all other routes, pass the request to the Next.js handler
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
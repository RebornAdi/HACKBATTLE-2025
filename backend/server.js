const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: path.join(__dirname, 'web') }); // point to 'web' folder
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Example custom route
  server.get('/hello', (req, res) => {
    return app.render(req, res, '/api/hello'); // your hello.ts route
  });

  // All other routes handled by Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});

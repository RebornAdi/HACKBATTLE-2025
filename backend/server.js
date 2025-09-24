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

  server.post('/api/location', async (req, res) => {
    const { lat, lon } = req.body;

    if (!lat || !lon) {
      return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }

    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'HealthBuddy/1.0 (vivek.kumar2023@vitstudent.ac.in)' // Required by OSM policy
        }
      });

      // The state is usually in the 'address.state' property of the response
      const state = response.data.address.state;

      if (state) {
        res.json({ state: state });
      } else {
        res.status(404).json({ error: 'State not found for these coordinates.' });
      }
    } catch (error) {
      console.error('Nominatim API Error:', error.message);
      res.status(500).json({ error: 'Failed to perform reverse geocoding.' });
    }
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
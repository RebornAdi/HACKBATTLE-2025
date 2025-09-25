require('dotenv').config();
const express = require('express');
const next = require('next');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { createProxyMiddleware } = require('http-proxy-middleware');

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const callbackURL = process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/auth/google/callback';

const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev, dir: path.resolve(__dirname, '../frontend') });

const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();
  // const router = express.Router();
  // const PYTHON_URL = process.env.PYTHON_URL || 'http://127.0.0.1:5000';
  // router.use(express.json());
  
  server.use(
  '/api',
  createProxyMiddleware({
    target: process.env.PYTHON_URL || 'http://127.0.0.1:4000',
    changeOrigin: true,                 // set Host to Python host
    pathRewrite: { '^/api': '' },       // /api/predict -> /predict (remove if paths already match)
    onProxyReq(proxyReq, req) {
      if (req.method !== 'GET' && req.body && Object.keys(req.body).length) {
        const body = JSON.stringify(req.body);
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(body));
        proxyReq.write(body);
      }
    },
  })
  );

  server.use(session({
    secret: process.env.SESSION_SECRET || 'dev_secret',
    resave: false,
    saveUninitialized: false,
  }));
  
  server.use(passport.initialize());
  server.use(passport.session());

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((obj, done) => done(null, obj));

  passport.use(new GoogleStrategy(
  { clientID, clientSecret, callbackURL },
  (accessToken, refreshToken, profile, done) => done(null, profile)
  ));

  server.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  server.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', session: true })
    ,(req, res) => {
      res.redirect('/');
  });

//   server.get('/login', (_req, res) => res.send('Login failed, try again'));
// // Logout
//   server.post('/logout', (req, res, next) => {
//     req.logout(err => {
//       if (err) return next(err);
//       req.session.destroy(() => res.redirect('/'));
//     });
//   });

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
          'User-Agent': 'HealthBuddy/1.0 (vivek.kumar2023@vitstudent.ac.in)'
        }
      });

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
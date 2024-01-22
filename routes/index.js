const express = require('express');
const router = express.Router();
const passport = require('passport');

// Render the login form
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Login route
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/home/', // Redirect on successful login
    failureRedirect: '/',      // Redirect on failed login
    failureFlash: true,
  })
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/home");
});

// Render the registration form
router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

// Handle registration form submission
router.post('/register', (req, res) => {
  // Handle user registration logic here
  // ...

  // Redirect to login page after successful registration
  res.redirect('/login');
});

module.exports = router;

const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// POST '/api/user'
router.post('/', (req, res) => {
  // expects {username: 'beng', password: 'test1234'}
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then((results) => {
      req.session.save(() => {
        req.session.userId = results.id;
        req.session.username = results.username;

        res.json({ message: 'You have signed up!' });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST '/api/user/login'
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then((results) => {
      if (!results) {
        res.status(400).json({ message: 'No user with that username address!' });
        return;
      }

      const validPassword = results.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }

      req.session.save(() => {
        req.session.userId = results.id;
        req.session.username = results.username;

        res.json({ message: 'You are now logged in!' });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });;
});

// POST '/api/user/logout'
router.post('/logout', withAuth, (req, res) => {
  if (req.session.userId) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;

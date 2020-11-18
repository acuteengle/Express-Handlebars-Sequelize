const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const { Post, User, Comment } = require('../models');

router.use('/dashboard', dashboardRoutes);

// HOMEPAGE
router.get('/', (req, res) => {
  Post.findAll({
    include: [
      {
        model: User
      },
      {
        model: Comment,
        include: {
          model: User
        }
      }
    ],
    order: [
      ['id', 'DESC']
    ]
  })
    .then((results) => {
      const posts = results.map(post => post.get({ plain: true }));
      res.render('homepage', {
        posts: posts,
        username: req.session.username
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// '/login'
router.get('/login', (req, res) => {
  if (req.session.userId) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// '/post/:id'
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User
      },
      {
        model: Comment,
        include: {
          model: User
        }
      }
    ]
  })
    .then((results) => {
      if (!results) {
        res.status(404).json({ message: 'No post found with specified id' });
        return;
      }

      const post = results.get({ plain: true });
      res.render('single-post', {
        post,
        username: req.session.username
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const { Post, User, Comment } = require('../models');

router.use('/dashboard', dashboardRoutes);

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'post_title',
      'post_body',
    ],
    include: [
      {
        model: Comment,
        attributes: ['comment_text'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((results) => {
      console.log(results);
      // const posts = results.map(post => post.get({ plain: true }));
      // res.render('homepage', {
      //   posts: posts,
      //   loggedIn: req.session.loggedIn
      // });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'post_title',
      'post_body'
    ],
    include: [
      {
        model: Comment,
        attributes: ['comment_text'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((results) => {
      if (!results) {
        res.status(404).json({ message: 'No post found with specified id' });
        return;
      }

      // const post = results.get({ plain: true });

      // res.render('single-post', {
      //   post,
      //   loggedIn: req.session.loggedIn
      // });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

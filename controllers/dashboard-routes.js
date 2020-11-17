const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

router.get('/', withAuth, (req, res) => {
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
      // serialize data before passing to template
      const posts = results.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
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
      if (!results) {
        res.status(404).json({ message: 'No post found with specified id' });
        return;
      }

      // const post = results.get({ plain: true });

      // res.render('edit-post', {
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
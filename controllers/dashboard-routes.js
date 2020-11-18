const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

// '/dashboard'
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.userId
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
      const posts = results.map(post => post.get({ plain: true }));
      res.render('dashboard', {
        posts,
        username: req.session.username
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// '/dashboard/edit/:id'
router.get('/edit/:id', withAuth, (req, res) => {
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
      },

    ]
  })
    .then((results) => {
      if (!results) {
        res.status(404).json({ message: 'No post found with specified id' });
        return;
      }

      const post = results.get({ plain: true });

      res.render('edit-post', {
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
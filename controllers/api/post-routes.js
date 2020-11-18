const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// GET '/api/post'
router.get('/', (req, res) => {
  Post.findAll({})
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST '/api/post
router.post('/', withAuth, (req, res) => {
  Post.create({
    post_title: req.body.post_title,
    post_body: req.body.post_body,
    user_id: req.session.userId
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT '/api/post'
router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      post_title: req.body.post_title,
      post_body: req.body.post_body,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE '/api/post'
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;


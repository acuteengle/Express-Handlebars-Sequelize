const { Post } = require('../models');

const postData = [
  {
    post_title: 'WhoDis?',
    post_body: '',
    user_id: 2,
  },
  {
    post_title: 'LOL',
    post_body: '',
    user_id: 1

  },
  {
    post_title: 'Nunya',
    post_body: '',
    user_id: 4

  },
  {
    post_title: 'AAVE',
    post_body: '',
    user_id: 3
  },
  {
    post_title: 'The Lies The Lies The Lies',
    post_body: '',
    user_id: 2
  },
  {
    post_title: 'Your Man Is A Crusty Fool',
    post_body: '',
    user_id: 1
  },
  {
    post_title: 'Why GOT is overrated',
    post_body: '',
    user_id: 5
  },
  {
    post_title: 'Cold weather is a plague on humanity',
    post_body: '',
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
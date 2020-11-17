const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'WhoDis?',
    // username: 'YaMom1326',
    post_id: 1,
    user_id: '',
  },
  {
    comment_text: 'LOL',
    // username: 'Tiffany DuBois',
    post_id: 2,
    user_id: '',
  },
  {
    comment_text: 'Nunya',
    // username: 'MoonBounce24',
    post_id: 3,
    user_id: '',
  },
  {
    comment_text: 'AAVE',
    // username: 'LadiesWhoLunch',
    post_id: 4,
    user_id: '',
  },
  {
    comment_text: 'The Lies The Lies The Lies',
    // username: 'RHOASuperfan',
    post_id: 5,
    user_id: '',
  },
  {
    comment_text: 'Your Man Is A Crusty Fool',
    // username: 'Hennything is Possible',
    post_id: 6,
    user_id: '',
  },
  {
    comment_text: 'Why GOT is overrated',
    // username: 'Dragoon57',
    post_id: 7,
    user_id: '',
  },
  {
    comment_text: 'Cold weather is a plague on humanity',
    // username: 'Fortinbras Ingasticado',
    post_id: 8,
    user_id: '',

  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
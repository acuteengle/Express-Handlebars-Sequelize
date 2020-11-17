const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  targetKey: 'id',
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  targetKey: 'id',
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  targetKey: 'id',
  foreignKey: 'user_id'
});

// User.hasMany(Comment, {
//   sourceKey: 'id',
//   foreignKey: 'user_id'
// });

// Post.hasMany(Comment, {
//   sourceKey: 'id',
//   foreignKey: 'post_id'
// });

module.exports = { User, Post, Comment };

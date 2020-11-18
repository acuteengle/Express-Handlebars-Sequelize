const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Nullam dapibus felis libero.",
    post_id: 1,
    user_id: 5,
  },
  {
    comment_text: "Morbi massa felis, tincidunt eu cursus vel, cursus nec nulla.",
    post_id: 2,
    user_id: 2,
  },
  {
    comment_text: "Proin ullamcorper ligula et nisi porta feugiat. Curabitur aliquet non massa nec tincidunt. Suspendisse quam odio, consequat ac massa eu, maximus tristique elit. Aliquam tristique ligula massa, non auctor leo eleifend dignissim. In efficitur nibh lectus, at ultricies tellus fringilla at.",
    post_id: 3,
    user_id: 4,
  },
  {
    comment_text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    post_id: 4,
    user_id: 2,
  },
  {
    comment_text: "Nullam pulvinar sed libero a mollis. Aliquam libero nibh, sodales et malesuada at, tempus ut leo. Vivamus scelerisque purus non lorem volutpat efficitur. Morbi urna ipsum, porttitor eget ligula quis, molestie suscipit purus.",
    post_id: 5,
    user_id: 4,
  },
  {
    comment_text: "Sed est ligula, interdum at enim sed, dapibus bibendum dui. Etiam faucibus orci risus, in venenatis neque porta id. Phasellus congue tincidunt massa vel viverra. Ut lacinia, tellus non vulputate dapibus, quam urna ullamcorper ex, sed fringilla ante magna quis leo.",
    post_id: 6,
    user_id: 2,
  },
  {
    comment_text: "Sed nec libero sollicitudin, rutrum massa ut, vehicula enim.",
    post_id: 7,
    user_id: 1,
  },
  {
    comment_text: "Curabitur aliquet non massa nec tincidunt. Suspendisse quam odio, consequat ac massa eu, maximus tristique elit. Aliquam tristique ligula massa, non auctor leo eleifend dignissim. In efficitur nibh lectus, at ultricies tellus fringilla at.",
    post_id: 2,
    user_id: 4,

  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
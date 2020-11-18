const { Post } = require('../models');

const postData = [
  {
    post_title: "What is Lorem Ipsum?",
    post_body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user_id: 2,
  },
  {
    post_title: "Why do we use it?",
    post_body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    user_id: 1

  },
  {
    post_title: "Where does it come from?",
    post_body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
    user_id: 4

  },
  {
    post_title: "Where can I get some?",
    post_body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    user_id: 3
  },
  {
    post_title: "Neque porro quisquam est",
    post_body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis aliquam vehicula. Vestibulum vel pulvinar sem. Aenean ultrices varius dolor ut pellentesque. Vestibulum tincidunt ultrices mauris, quis gravida metus interdum vel. Fusce quis ipsum dui. Nullam sodales, lectus id eleifend iaculis, leo est tempus quam, eget auctor enim quam non neque. In efficitur sapien vel eros tincidunt consectetur. Suspendisse lacinia lectus non lacus malesuada, a suscipit elit iaculis. Mauris cursus, nibh a imperdiet euismod, ex nisi facilisis ante, vehicula auctor lectus diam quis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    user_id: 2
  },
  {
    post_title: "Dolorem ipsum quia",
    post_body: "Curabitur quis urna non metus interdum varius eget in lacus. Morbi posuere nunc ut faucibus vehicula. Maecenas tempor nunc molestie lorem imperdiet, quis cursus libero tristique. Proin ullamcorper ligula et nisi porta feugiat. Curabitur aliquet non massa nec tincidunt. Suspendisse quam odio, consequat ac massa eu, maximus tristique elit. Aliquam tristique ligula massa, non auctor leo eleifend dignissim. In efficitur nibh lectus, at ultricies tellus fringilla at.",
    user_id: 1
  },
  {
    post_title: "Consectetur, adipisci velit",
    post_body: "Pellentesque dui metus, pretium in ligula vel, condimentum rhoncus libero. Fusce vel lacus sit amet dui consequat congue eu sed elit. Proin commodo justo aliquam, gravida est a, feugiat ligula. Vivamus non ultrices eros. Maecenas laoreet ex at orci porta, nec facilisis lectus aliquam. Mauris nec pharetra dui, sed blandit neque. Nulla vulputate ante libero, placerat porta justo dapibus maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin non elementum mi. Suspendisse potenti. Vivamus sed augue ornare, maximus odio non, consectetur nunc.",
    user_id: 5
  },
  {
    post_title: "Nullam eleifend tortor massa",
    post_body: "Ut egestas lacus id odio imperdiet sagittis. Phasellus non elit nec quam pulvinar ullamcorper vel vitae leo. Aliquam quam nunc, fringilla vel nulla et, aliquam ornare diam. Nullam dapibus felis libero, eu malesuada massa consequat ut. Suspendisse ultricies tellus vel felis faucibus eleifend. Mauris laoreet nibh eu mauris tempus ultricies. Nulla ornare arcu a ullamcorper facilisis. Praesent at neque non nunc pharetra sollicitudin vitae eget lacus. Morbi massa felis, tincidunt eu cursus vel, cursus nec nulla. Sed nec libero sollicitudin, rutrum massa ut, vehicula enim.",
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
const { User } = require('../models');

const userData = [
  {
    username: 'Ash',
    password: "test1234",
  },
  {
    username: 'Misty',
    password: "test1234",
  },
  {
    username: 'Brock',
    password: "test1234",
  },
  {
    username: 'May',
    password: "test1234",
  },
  {
    username: 'Pikachu',
    password: "test1234",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
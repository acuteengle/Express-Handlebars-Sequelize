const { User } = require('../models');

const userData = [
  {
    username: 'Ash',
    password: "$2b$10$TxlWk1fdRBkXCrL/Tz6R0ew9mY2NC0I.se4bTtnRIotwg2lrzZ.4y", //test1234
  },
  {
    username: 'Misty',
    password: "$2b$10$TxlWk1fdRBkXCrL/Tz6R0ew9mY2NC0I.se4bTtnRIotwg2lrzZ.4y",
  },
  {
    username: 'Brock',
    password: "$2b$10$TxlWk1fdRBkXCrL/Tz6R0ew9mY2NC0I.se4bTtnRIotwg2lrzZ.4y",
  },
  {
    username: 'May',
    password: "$2b$10$TxlWk1fdRBkXCrL/Tz6R0ew9mY2NC0I.se4bTtnRIotwg2lrzZ.4y",
  },
  {
    username: 'Pikachu',
    password: "$2b$10$TxlWk1fdRBkXCrL/Tz6R0ew9mY2NC0I.se4bTtnRIotwg2lrzZ.4y",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
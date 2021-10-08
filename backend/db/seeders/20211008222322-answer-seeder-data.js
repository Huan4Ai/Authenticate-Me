'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Answers', [
      {
        "userId": 1,
        "questionId": 2,
        "answer": "Dogs don’t enjoy being hugged as much as humans and other primates. Canines interpret putting a limb over another animal as a sign of dominance.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": 2,
        "questionId": 3,
        "answer": "Humans betray, dogs never",
        createdAt: new Date(),
        updatedAt: new Date()

      }


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Answers', null, {});

  }
};

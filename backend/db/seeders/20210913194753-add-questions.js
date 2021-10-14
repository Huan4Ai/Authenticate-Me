'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Questions', [
      {
        "id": 1,
        "ownerId": 1,
        "title": "What are some unknown facts about dogs?",
        "description": "As human's best friends, many people love dogs. I love dogs and I want to learn about them too! Can someone give me more details about dogs?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 2,
        "ownerId": 2,
        "title": "What are the benefits of getting a dog as a pet?",
        "description": "I have seen many of my friends having a dog as pet. What are the benefits of owning a dog?",
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
      */
   return queryInterface.dropTable('Questions');
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Categories', [
      {
        name : 'Horror',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Action',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Thriller',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'History',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Science',
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Movies', [
      {
        name : 'Setan Budeg',
        category_id : 1,
        year : 2020,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Downhill Domination',
        category_id : 2,
        year : 2012,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Quantum Sprinkle',
        category_id : 3,
        year : 2018,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Adolf Hitler',
        category_id : 4,
        year : 2019,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Quantum Physics',
        category_id : 5,
        year : 2023,
        createdAt : new Date(),
        updatedAt : new Date()
      },
 
    ], {})

  },

  async down (queryInterface, Sequelize) {

   await queryInterface.bulkDelete('Movies', null, {});

  }
};

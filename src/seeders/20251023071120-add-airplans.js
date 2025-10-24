'use strict';
const {Op} = require(`sequelize`);

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
   await queryInterface.bulkInsert(`airplans`,[
    {
      modelNumber: `airbus3001`,
      capacity: 900,
      createdAt: new Date(),
      updatedAt: new Date()
   },
    {
      modelNumber: `boeing`,
      capacity: 450,
      createdAt: new Date(),
      updatedAt: new Date()
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(`airplans`,
      {
        [Op.or]:[
          {modelNumber:`airbus3001`},
          {modelNumber:`boeing`}
        ]
      })
  }
};

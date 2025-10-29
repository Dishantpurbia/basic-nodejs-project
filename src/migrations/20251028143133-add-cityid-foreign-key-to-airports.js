'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint(`Airports`,{
      fields:[`cityId`],
      type: `foreign key`,
      name:"fk_airport_cityid",
      references:{
        table:`Cities`,
        field:`id`
      },
      onUpdate:`CASCADE`,
      onDelete:`CASCADE`
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint(`Airports`,"fk_airport_cityid");
  }
};

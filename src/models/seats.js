'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  seats.init({
    airplaneId: DataTypes.INTEGER,
    row: DataTypes.INTEGER,
    col: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'seats',
  });
  return seats;
};
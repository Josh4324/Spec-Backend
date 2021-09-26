'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaleQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MaleQuestion.init({
    name: DataTypes.STRING,
    count: DataTypes.INTEGER,
    option1: DataTypes.INTEGER,
    option2: DataTypes.INTEGER,
    option3: DataTypes.INTEGER,
    option4: DataTypes.INTEGER,
    option5: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MaleQuestion',
  });
  return MaleQuestion;
};
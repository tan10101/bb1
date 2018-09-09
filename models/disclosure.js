'use strict';
module.exports = (sequelize, DataTypes) => {
  const Disclosure = sequelize.define('Disclosure', {
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    added: DataTypes.INTEGER
  }, {});
  Disclosure.associate = function(models) {
    // associations can be defined here
  };
  return Disclosure;
};

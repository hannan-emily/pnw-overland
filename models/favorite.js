'use strict';
module.exports = (sequelize, DataTypes) => {
  var favorite = sequelize.define('favorite', {
    title: DataTypes.TEXT,
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  favorite.associate = function(models) {
    // associations can be defined here
  };
  return favorite;
};
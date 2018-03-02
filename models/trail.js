'use strict';
module.exports = (sequelize, DataTypes) => {
  var trail = sequelize.define('trail', {
    startLat: DataTypes.FLOAT,
    startLng: DataTypes.FLOAT,
    endLat: DataTypes.FLOAT,
    endLng: DataTypes.FLOAT,
    title: DataTypes.TEXT,
    subtitle: DataTypes.TEXT,
    video: DataTypes.STRING,
    sourceURL: DataTypes.STRING
  }, {});
  trail.associate = function(models) {
    // associations can be defined here
  };
  return trail;
};

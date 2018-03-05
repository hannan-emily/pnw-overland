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
    models.trail.hasMany(models.note);
  };
  return trail;
};

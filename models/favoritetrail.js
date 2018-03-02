'use strict';
module.exports = (sequelize, DataTypes) => {
  var favoriteTrail = sequelize.define('favoriteTrail', {
    userId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    trailId: DataTypes.INTEGER,
    note: DataTypes.TEXT
  }, {});
  favoriteTrail.associate = function(models) {
    models.favoriteTrail.belongsTo(models.user);
  };
  return favoriteTrail;
};

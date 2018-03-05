'use strict';
module.exports = (sequelize, DataTypes) => {
  var note = sequelize.define('note', {
    content: DataTypes.TEXT,
    trailId: DataTypes.INTEGER
  }, {});
  note.associate = function(models) {
    models.note.belongsTo(models.trail);
  };
  return note;
};

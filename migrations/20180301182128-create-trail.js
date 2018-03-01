'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startLat: {
        type: Sequelize.FLOAT
      },
      startLng: {
        type: Sequelize.FLOAT
      },
      endLat: {
        type: Sequelize.FLOAT
      },
      endLng: {
        type: Sequelize.FLOAT
      },
      title: {
        type: Sequelize.TEXT
      },
      subtitle: {
        type: Sequelize.TEXT
      },
      video: {
        type: Sequelize.STRING
      },
      sourceURL: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trails');
  }
};
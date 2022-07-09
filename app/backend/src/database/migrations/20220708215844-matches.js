'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      home_team: {
        type: Sequelize.INTEGER,
        allowNull: false,
        underscored: true,
      },
      home_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false,
        underscored: true,
      },
      away_team: {
        type: Sequelize.INTEGER,
        allowNull: false,
        underscored: true,
      },
      away_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false,
        underscored: true,
      },
      in_progress: {
        type: Sequelize.INTEGER,
        allowNull: false,
        underscored: true,
      },
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.createTable('matches');
  }
};

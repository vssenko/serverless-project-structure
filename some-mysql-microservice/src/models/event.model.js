'use strict';

const DataTypes = require('sequelize').DataTypes;

/**
* @typedef {import('sequelize').Sequelize} Sequelize
*/

/**
* @param {Sequelize} sequelize
* @returns
*/
module.exports = (sequelize) => {
  const Event = sequelize.define(
    'event',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      payload: {
        type: DataTypes.JSON,
        defaultValue: {}
      }
    },
    {
      timestamps: true,
    }
  );
  return Event;
};
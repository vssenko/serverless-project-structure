const config = require('../config');
const Sequelize = require('sequelize').Sequelize;
const logger = require('../utils/logger');
const dbConfig = config.db;

const sequelize = new Sequelize({
  ...config.db,
});

const models = {};

models.Event = require('./event.model')(sequelize);

//for relations setup
Object.values(models).forEach((m) => m.associate && m.associate(models));

logger.log(
  `Using DB: Host="${dbConfig.host}",` +
    `Database=${dbConfig.database},` +
    `Username="${dbConfig.username}",` +
    `Password="${dbConfig.password.substr(0, 2)}..."`
);

// Not sure if it is needed, and how it will affect cold/warm starts
// sequelize
//   .authenticate()
//   .then(() => {
//     logger.log('DB: Connection has been established successfully.');
//   })
//   .catch((err) => {
//     logger.error('DB: Unable to connect to the database:', err);
//   });

module.exports = {
  ...models,
  sequelize,
  Sequelize,
};

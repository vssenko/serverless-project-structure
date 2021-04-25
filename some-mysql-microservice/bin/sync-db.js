const models = require('../src/models');

console.log('DB: Syncing db...');
models.sequelize.sync().then(() => {
  console.log('DB: sync successful');
  process.exit(0);
}).catch(e => {
  console.error(e);
  process.exit(0);
});

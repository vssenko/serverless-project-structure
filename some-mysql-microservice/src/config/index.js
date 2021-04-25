const allLocalEnvs = ['', 'local', 'dev', 'development'];

if (process.env.LOAD_DOT_ENV == 'true' || (!process.env.NODE_ENV || allLocalEnvs.includes(process.env.NODE_ENV))) {
  require('dotenv').config();
}

const env = process.env.NODE_ENV || 'dev';

const db = {
  host: process.env.db_url || 'localhost',
  port: process.env.db_port || '3306',
  username: process.env.db_user || 'root',
  password: process.env.db_password || 'root',
  database: process.env.database || 'crtn',
  dialect: process.env.db_dialect || 'mysql',
  logging: process.env.db_log_all || false,
  ssl: process.env.db_use_ssl || false,
  // connectionTimeout: 10,
  // requestTimeout: 10,
  // pool: {
  //   max: 100,
  //   min: 1,
  //   acquire: 30000,
  //   idleTimeoutMillis: 300000,
  //   idle: 10000,
  // }
}

module.exports = {
  env,
  db
};
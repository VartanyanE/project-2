require('dotenv').config();

module.exports =


{
  "development": {
    "username": "root",
    "password": "password",
    "database": "inventory_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "inventory_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.HEROKU_USER,
    "password": process.env.HEROKU_PASSWORD,
    "database": process.env.HEROKU_DATABASENAME,
    "host": process.env.HEROKU_HOST,
    "dialect": "mysql"
  }
}
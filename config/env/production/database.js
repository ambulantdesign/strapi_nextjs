// path: ./config/env/production/database.js

const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL);
const { host, port, database, user, password } = parse(env("DATABASE_URL"));

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: host,
      port: port,
      database: database,
      user: user,
      password: password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

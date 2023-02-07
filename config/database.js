module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "Strapi-for-NextJSUdemy"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "16nX28I61jAwpC7v"),
      ssl: env.bool("DATABASE_SSL", false),
      socketPath: "/tmp/mysql.sock",
    },
  },
});

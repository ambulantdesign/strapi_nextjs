module.exports = ({ env }) => ({
  connection: {
    // client: "mysql",
    // connection: {
    //   host: env("DATABASE_HOST", "localhost"),
    //   port: env.int("DATABASE_PORT", 3306),
    //   database: env("DATABASE_NAME", "strapi_backend_nextjs"),
    //   user: env("DATABASE_USERNAME", "root"),
    //   password: env("DATABASE_PASSWORD", "16nX28I61jAwpC7v"),
    //   ssl: env.bool("DATABASE_SSL", false),
    //   socketPath: "/tmp/mysql.sock",
    // },
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "db_dj_events_backend"),
      user: env("DATABASE_USERNAME", "db_dj_events_backend_user"),
      password: env("DATABASE_PASSWORD", "7J2F3vYBYD2QjAtpA8BslzbzYzg1JBz4"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: env.bool("DATABASE_SSL", false),
    },
    debug: false,
  },
});

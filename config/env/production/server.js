// Path: ./config/env/production/server.js

module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
});

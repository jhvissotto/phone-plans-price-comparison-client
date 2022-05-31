const { env } = require("../environment/env");

const nodeEnv = {
  production: ["production", "prod"].includes(env.NODE_ENV),
  development: ["development", "dev"].includes(env.NODE_ENV),
  prod: ["production", "prod"].includes(env.NODE_ENV),
  dev: ["development", "dev"].includes(env.NODE_ENV),
};

module.exports = { nodeEnv };

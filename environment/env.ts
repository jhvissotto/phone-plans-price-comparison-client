const env = {
  // SERVER
  PORT: Number(process.env.PORT),
  NODE_ENV: process.env.NODE_ENV,

  // DATABASE
  DB_HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.DB_PORT),
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,

  // API
  NEXT_API_BASE_URL: process.env.NEXT_PUBLIC_NEXT_API_BASE_URL,
  EXPRESS_API_BASE_URL: process.env.NEXT_PUBLIC_EXPRESS_API_BASE_URL,
};

export { env };

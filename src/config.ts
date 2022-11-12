import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT || '2020',
    },
    postgres: {
      db: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT),
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    apiKey: process.env.API_KEY,
    secretKey: process.env.SECRET_KEY,
  };
});

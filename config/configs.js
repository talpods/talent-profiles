import dotenv from 'dotenv';

dotenv.config();

export const configs = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  dbRegion: process.env.DB_REGION || 'eu-north-1',
  usersTableName: process.env.USERS_TABLE,
  imagesSrc: process.env.IMAGES_SRC,
};

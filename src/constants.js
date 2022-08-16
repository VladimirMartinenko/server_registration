const CONSTANTS = {
  DB_NAME: process.env.DB_NAME || 'test',
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/',
  JWT_ACCESS_SECRET : 'secret_key_12343532DFSL',
  JWT_ACCESS_EXPIRATION_TIME: '30s',
  JWT_REFRESH_SECRET: 'jhhhhhhhhhgggggg',
  JWT_REFRESH_EXPIRATION_TIME: '14d'
}

module.exports = CONSTANTS
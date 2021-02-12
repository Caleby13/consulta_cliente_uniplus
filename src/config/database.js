require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  quoteIdentifiers: false,
  pool: {
    handleDisconnects: true,
    max: 100,
    min: 0,
    idle: 20000,
    acquire: 60000,
    evict: 1000,
    maxUses: 10,
  },
  define: {
    freezeTableName: true,
    timestamps: false,
    quoteIdentifiers: false,
  },
};

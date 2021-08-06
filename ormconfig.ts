require('dotenv').config();

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  migrationsTableName: "migrations",
  entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/entities/*.*`],
  migrations: ["dist/migrations/*.js"],
  ssl: {
    rejectUnauthorized: false,
  },
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir: "dist/entities/*.js"
  }
};
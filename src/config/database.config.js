const { Pool } = require('pg')

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

pool.connect()
  .then(()=> console.log('connected to Goomie Gadget database'))
  .catch(err=> console.error('connected error',err.stack))

module.exports = pool;
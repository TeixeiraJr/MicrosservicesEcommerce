import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname+'/../../.env' })
console.log(process.env.PG_CONNECTION_STRING)
const pg = require('knex')({
    client: "pg",
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public']
})

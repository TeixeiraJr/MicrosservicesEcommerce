import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname+'/../../.env' })
console.log(process.env.PG_CONNECTION_STRING)
module.exports = {
    client: process.env.DB_CLIENT,
    connection: process.env.PG_CONNECTION_STRING
}

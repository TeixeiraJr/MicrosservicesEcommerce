import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname+'/../../.env' })
console.log(process.env.PG_CONNECTION_STRING)
const config = {
    client: process.env.DB_CLIENT,
    connection: process.env.PG_CONNECTION_STRING
}

export default config
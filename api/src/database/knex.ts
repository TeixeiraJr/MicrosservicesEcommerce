import config from './index'
const knex = require('knex')(config);

export default knex
"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config({ path: __dirname + '/../.env' });
console.log(process.env.PG_CONNECTION_STRING);
var PG = require('knex')({
    client: "pg",
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public']
});

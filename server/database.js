const Pool = require('pg').Pool;
const response = require("express");

const pool = new Pool({
    user: "postgres",
    password: "arpsud18",
    host:"localhost",
    port: 5432,
    database: "petadoption",

});

module.exports = pool;
const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "cdcr48",
    host: "localhost",
    port: 5432,
    database: "sudoku_login"
});

module.exports = pool;
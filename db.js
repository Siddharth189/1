import mysql from "mysql2";
// const mysql = require("mysql2");

let con;
export default con = mysql.createConnection({
  host: "localhost",
  user: "siddharth",
  password: "Sid@1234",
  database: "portfolio_db",
});

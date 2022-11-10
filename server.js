
import express, { urlencoded, json } from 'express';
import { join } from "path";
const app = express();
import con from "./db.js";
const port = 8080;
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

con.connect(function (err) {
  if(err) throw err;
  else{
    console.log("database connected🥳🥳🥳🥳 ");
  }
});

app.use("/public", express.static("./public"));
app.use(urlencoded({ extended: true })); 
app.use(json());   

app.get("/", function(req, res) {
  res.sendFile(join(__dirname, "index.html"));
});

app.post('/add', (req, res) => {
  const val = req.body;
  // console.log(val.id+" "+val.name+" "+val.address);
  let ctable = `CREATE TABLE IF NOT EXISTS Contact(name varchar(20), email nvarchar(255), message varchar(1000))`;
  con.query(ctable, function (err) {
    if(err) throw err;
  })
  con.query
  let add_q = `INSERT INTO Contact (name, email, message) VALUES ('${val.name}', '${val.email}', '${val.message}')`;
  con.query(add_q,function (err) {
    if(err) throw err;
    else{
      res.redirect('/');
    }
  });

});

app.listen(port, () => {
  console.log(`Server 🏃🏃🏃🏃 at http://localhost:${port}`);
});

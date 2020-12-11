const Database = require("@replit/database")
const db = new Database()

function bugReport(){
  let bug = prompt('Please Enter Bug Here: ');
  console.log(bug);
  db.set("bug", bug).then(() => {});
  test = db.get("key").then(value => {});
  console.log(test);

}


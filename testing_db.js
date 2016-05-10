var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./cgk.db');

db.each("SELECT * FROM questions", function(err, row) {
  console.log(row.id + ": " + row.question_text);
});
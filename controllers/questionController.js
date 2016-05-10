'use strict';

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./../cgk.db');

class question {
    constructor () {}
    
    addNewQuestion (req, res, next) {
        db.run(`INSERT INTO questions (question_text, image) VALUES('${req.body.questionText}', '${req.body.image}' )`);
        res.status(200);
    }


    getQuestion () {
        
    }
}

module.exports = new question();


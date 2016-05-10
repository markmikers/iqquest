'use strict';
//declare variables

//basic
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var question = require('./controllers/questionController');

//database
//todo and body parser
// declare links
{
app.get('/', function(req, res){
  res.sendFile(__dirname + '/frontend/view/index.html');
});

app.get('/admin', function(req, res){
  res.sendFile(__dirname + '/frontend/view/admin.html');
});

app.get('/admin/:path', function(req, res){
  res.sendFile(__dirname + `/frontend/${req.params.path}`);
});

app.get('/frontend/view/:path', function(req, res){
  res.sendFile(__dirname + `/frontend/view/${req.params.path}`);
});
  
app.get('/frontend/js/:path', function(req, res){
  res.sendFile(__dirname + `/frontend/js/${req.params.path}`);
});
  
app.post('/admin/question', question.addNewQuestion);

}

//initialize socket
io.on('connection', function(socket){
  socket.on('question', function(msg){
    socket.broadcast.emit('question', msg);
  });
  socket.on('answer', function(msg){
    socket.broadcast.emit('answer', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
var express = require('express');
var app = express();
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use('/assets', express.static(__dirname + '/public'));
app.use('/assets/js', express.static(__dirname + '/js'));

//TODO: matchmaking
//TODO: game syncing

var games = {"game": {}};

function notMe(game, me) {
  for(var i in game) {
    if(i != me) return game[i];
  }
  return false;
}

var colors = ["﷐'green", "﷐'blue"];
var lastColor = 0;

function nextColor() {
  lastColor++;
  if(lastColor > (colors.length - 1)) {
    lastColor = 0;
  }
  return colors[lastColor];
}

io.sockets.on('connection', function (socket) {
  games["game"][socket.id] = socket;
  socket.emit('game', { "﷐'color": nextColor(), "﷐'opponent-color": nextColor()});
  nextColor();
  socket.on('action', function (data) {
    var other = notMe(games["game"], socket.id);
    if(other) {
    	other.emit("action", data);
    }
  });
  socket.on("disconnect", function() {
    delete games["game"][socket.id];
  });
});

server.listen(3000);
console.log('Listening on port 3000');
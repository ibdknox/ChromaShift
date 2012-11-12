var express = require('express');
var app = express();
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.compress());
app.use(app.router);
app.use('/assets', express.static(__dirname + '/public'));
app.use('/assets/js', express.static(__dirname + '/js'));

//TODO: matchmaking
//TODO: game syncing

var gameId = 0;
var games = {};
var pool = {};
var dudeToGame = {};

var scores = {"﷐'green": 1000,
              "﷐'blue" : 1000}

function notMe(game, me) {
  for(var i in game["players"]) {
    if(i != me) return game["players"][i];
  }
  return false;
}

var colors = ["﷐'green", "﷐'blue"];
var lastColor = 0;
var gameNumberThreshold = 100;

function nextColor() {
  lastColor++;
  if(lastColor > (colors.length - 1)) {
    lastColor = 0;
  }
  return colors[lastColor];
}

function oppositeColor(c) {
  if(c == "﷐'blue") {
    return "﷐'green";
  }
  return "﷐'blue";
}

function findOpposite(dude) {
  for(var id in pool) {
    if(id == dude.socket.id) continue;
    if(pool[id].color != dude.color) {
      return pool[id];
    }
  }
  return false;
}

function now() {
  return (new Date()).getTime();
}

function pickLevel() {
  return "first";
}

function makeGame(p1, p2) {
  delete pool[p1.id];
  delete pool[p2.id];
  var game = gameId++;

  dudeToGame[p1.id] = dudeToGame[p2.id] = game;
  games[game] = {created: now(), players: {}};
  games[game]["players"][p1.id] = p1;
  games[game]["players"][p2.id] = p2;

  var level = pickLevel();

  p1.socket.emit('game', { "﷐'color": p1.color, "﷐'opponent-color": p2.color, "﷐'level": level});
  p2.socket.emit('game', { "﷐'color": p2.color, "﷐'opponent-color": p1.color, "﷐'level": level});
}

var fiveMinutes = 5 * 60 * 1000;
function prune() {
  var old = now() - fiveMinutes;
  for(var i in games) {
    if(games[i].created <= old) {
      delete games[i];
    }
  }
}

function match() {

  if(Object.keys(pool).length == 0 
     || Object.keys(games).length >= gameNumberThreshold) { process.nextTick(match); return;  }

  prune();

  for(var i in pool) {
    var dude = pool[i];
    var other = findOpposite(dude);
    console.log
    if(other) {
      console.log("making a game");
      makeGame(dude, other);
      console.log("made a game");
    }
    return process.nextTick(match); //try matching all the time
  }
}

function report() {
  console.log("Games running: " + Object.keys(games).length);
  console.log("Pool size: " + Object.keys(pool).length);
  setTimeout(report, 5000);
}

report();

function queue(me) {
  pool[me.id] = me;
}

function removeFromGame(g, me) {
  try {
  delete games[g]["players"][me.id];
  delete dudeToGame[me.id];
  //tell the other client player dropped
  var other = notMe(games[g], me.id);
  if(other && other.socket) {
    other.socket.emit("opponent-dropped", {});
  } else {
    //you're both gone
    console.log("Both dc'd removing game: " + g);
    delete games[g];
  }
	} catch (e) {
      console.log("Failed remove: " + e.stack);
	}
}

io.sockets.on('connection', function (socket) {
  var me = {id: socket.id, socket: socket, color: nextColor()};
  socket.on("match", function() {
    queue(me);
  });
  socket.on('action', function (data) {
    var g = dudeToGame[me.id];
    if(g) {
      var other = notMe(games[g], me.id);
      if(other && other.socket) {
        other.socket.emit("action", data);
      }
    }
  });
  socket.on("end", function (data) {
    var g = dudeToGame[me.id];

    if(games[g] && !games[g]["won"]) {
      me.socket.emit("win", {"﷐'win": true});
      games[g]["won"] = true;
      var other = notMe(games[g], me.id);
      if(other && other.socket) {
        other.socket.emit("win", {"﷐'win": false});
        removeFromGame(g, other);
    	//add to global points
      }
    } else {
      me.socket.emit("win", {"﷐'win": false});
    }

    removeFromGame(g, me);
    //add to global points
  });
  socket.on("disconnect", function() {
    var g = dudeToGame[me.id];
          console.log("disconnected: " + me.id);
    if(g) {
      console.log("disconnect from: " + g);
      removeFromGame(g, me)
    } else {
      if(pool[me.id]) {
      	delete pool[me.id];
      }
    }
  });
});

io.set("log level", 1);

server.listen(3000);
match();
console.log('Listening on port 3000');
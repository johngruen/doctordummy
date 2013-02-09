//BUILDS SERVER & ROUTES SOCKETS


//server init
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
 
//app is express server, io is socket listener
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
//io.set('close timeout',5);

//load drum data file
var drums = require('./data/drums').data;

//configure express server
app.configure(function(){
  app.set('host','localhost');
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
	
})

server.listen(3000);


//get routing paths ref routes/index.js
app.get('/', routes.index);

app.get('/machine/:title', routes.drum);

app.get('/machine', routes.machine);

app.get('/users', user.list); //requrired in express 3.x

//app.get('/*', routes.error); //disabled 404 because it seems to nullify public directory

//connectedDrums holds all drum objects currently in use
var connectedDrums = [];

//listen for connection
io.sockets.on('connection', function (socket) {
  
	socket.emit('entrance'); 
	socket.emit('hideDrums',{goodStuff:connectedDrums}); //makes sure drums are visible or hidden on homepage
	
	//when a drum connects, check and make sure it's available, if available update connectedDrums
    socket.on('isDrum',function(data) {
		var check = false;
		
		for(var i = 0; i < connectedDrums.length; i++){
			if (data.voice == connectedDrums[i].drumVoice) {
				socket.emit('taken',{check:socket.id});
				console.log("#####TAKEN#######");
				check = true;
			} 
		}
		//adds drum to connectedDrums, records ID of socket using drum,drum name and current sequence arry
		if(!check) {
 		connectedDrums.push({
			drumId:socket.id,
			drumVoice:data.voice,
			drumSeq:data.seq
		});
		
		console.log("connected drums:");
		console.log(connectedDrums);
		io.sockets.emit('hideDrums',{goodStuff:connectedDrums}) //make sure taken drums hidden on homepage
		io.sockets.emit('sendVoices',{goodStuff:connectedDrums});//send voices to drum machine
	}
  	});

	//on disconnect update connectedDrums if a drum disconnects

	
	socket.on('disconnect',function(){
		console.log('ping!')
		io.sockets.emit('pingged',{});
		for(var i = 0; i < connectedDrums.length; i++){
			if(socket.id == connectedDrums[i].drumId) {
				connectedDrums.splice(i,1);
			}
		}
		console.log("drum disconnected, connected drums:");
		console.log(connectedDrums);
		io.sockets.emit('hideDrums',{goodStuff:connectedDrums})
		io.sockets.emit('sendVoices',{goodStuff:connectedDrums});
	})
	
	//if a sequeence gets updated, refresh sequence info for voice's object
	socket.on('seqUpdate',function(data){
		for(var i = 0; i < connectedDrums.length; i++){
			if(socket.id == connectedDrums[i].drumId) {
				connectedDrums[i].drumSeq = data.seq;
			}
		}
		io.sockets.emit('sendVoices',{goodStuff:connectedDrums});
	});
	
	//if drums get requested, send them
	socket.on('requestDrums',function(){
		io.sockets.emit('sendVoices',{goodStuff:connectedDrums});
	});
});






WELCOME TO DR. DUMMY 2.0

########WHAT IT IS:

dr. dummy is a node.js  based drum-machine project using the express MVCish framework and sockets.io;

Express uses the app.js to create a series of views populated by a data file /data/drums.js which provides each of the voices for the drum machine. Client side pages are then generated dynamically by traversing the data.js file and rendered dynamically using the EJS rendering node module.

BTW it sounds better through good speakers

#######How it works:

before you start you may need to run npm install to install all node.js dependencies...package.json handles dependencies

point your browser to host (currently localhost:3000), the home page provides a list of drums and access to the drum machine itself. In one window go to the drum machine, in other windows select drums and click boxes to create a sequence for each voice. When you go to a drum page, the drum machine detects the drum and displays it, it also updates the machine as you alter your drum sequences. Leaving a drum page removes that voice from the drum machine. Refreshing a drum page flushes the sequence.


#######Important files (with comments):

app.js: the server itself intializes Express project and handles all socket.io events
data/drums.js :data to dynamcially load drum
views/index.ejs :view for index
views/drum.ejs :view for each drum
views/machine.ejs: view for machine
routes/index.js: routing file for URL requests
/public/scripts/drumSeq.js: javascript obj to handle each drum.ejs view
/public/scripts/voiceSeq.js: js obj to handle each voice in drum machine (machine.ejs)


######Node Modules Used:

Express - server
Socket.io - socket routing
EJS - server side markdown for views

#####JS Libs used

jQuery: used for animation and one or two filtering functions. jQuery is used very little, but I used it tactically to make my life a lot easier

Audiolet.js: Drives all sound, nb. w/in audiolet samples are loaded through builtin XHR capabilities


########Resources used

Audiolet documentation: my build of the drum machine is adapted from an Audiolet example

Lynda: Lynda has a nice node primer which helped me get express & socket running, but was also kind of misleading b/c it relied on old versions of each

Express API ref: for figuring out how to make express work for me

#########Known Bugs: 

I couldn't implement a 404 page for the server as doing so in the way recommended by documentation made public assets invisible to the drum machine. going to invalid urls int the site throws a GET error.





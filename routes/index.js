//routed, sets routes for URLs w/ EXPRESS

//require drums file
var drums = require('./../data/drums.js').data;

//index file, send drums along
exports.index = function(req,res){
	res.render('index', {
				title:'::Dr. Dummy 2.0::',
				drums:drums,
				});
}

//machine file, send drums along
exports.machine= function(req,res){
	res.render('machine',{
				title:'::Dr. Dummy 2.0::',
				drums:drums,
				});
}

//drum file, sends each drum along
exports.drum = function(req,res){
	console.log("#   " + req.url);
	drums.forEach(function(drum){
		if (req.url == "/machine"+drum.url) {
			res.render('drum.ejs',{
				title:'::Dr. Dummy 2.0::',
				drum: drum,
			});
		}
	});
		
}
exports.error = function(req,res){
	res.render('404',{title:'nope'});
}
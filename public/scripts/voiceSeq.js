
//object for each voice
//creates HTML markup and handles drawing
function Voice(slug,name) {
	this.slug = slug;
	this.name = name;
	this.holder = document.createElement("div");
	this.holder.className += "voiceContainer";
	this.holder.id = slug;
	this.voice = document.createElement("div");
	this.voice.className += "voiceSequence";
	this.voice.id = slug + "Sequence";
	this.title = document.createElement('h3');
	this.title.innerHTML = this.name;
	this.holder.appendChild(this.title);
	this.holder.appendChild(this.voice);
	var machine = document.getElementById('machine');
	machine.appendChild(this.holder);
	this.isOnline = false;
	this.booms = [];
	this.socketSeq = [];
}

//draw the little boxes in the big boxes
Voice.prototype.drawChildren = function() {
	for(var i = 0; i < 16; i++) {
		this.booms[i]= document.createElement("div");
		this.booms[i].className = "boom";
		this.voice.appendChild(this.booms[i]);	
	}
}

//add red dots to boxes
Voice.prototype.socketSeqUpdate = function(){
	for(var i = 0; i < 16; i++) {
		if(this.socketSeq[i]===1) $(this.booms[i]).addClass('active');
		else $(this.booms[i]).removeClass('active');
		
	}
}

//if voice is on, show
Voice.prototype.showTitle = function() {
	$(this.holder).slideDown(150);
}

//if voice is off, hide
Voice.prototype.hideTitle = function() {
	$(this.holder).hide();
}
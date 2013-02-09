function Sequence(ref) {
	this.div = document.getElementById("single_sequence");	
	this.id = Math.random()
	this.info = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	this.booms = []
	this.ref = ref;
	socket.emit('isDrum',{voice:ref,seq:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});
}

Sequence.prototype.drawChildren = function() {
	for(var i = 0; i < 16; i++) {
		this.booms[i]= document.createElement("div");
		this.booms[i].className = "boom";
		this.div.appendChild(this.booms[i]);
		 if (i % 4 == 0) $(this.booms[i]).css("background-color","#ddd")	
	}
}

Sequence.prototype.clickListen = function() {
	for(var i = 0; i < 16; i++) {
		(function(boom,index,info,ref){
			boom.addEventListener('click',function(){
				$(this).toggleClass('active');
				if( $(this).hasClass('active')){
					info[index] = 1;
				} else {
					info[index] = 0;
				};
				console.log(info);
				socket.emit('seqUpdate',{voice:ref,seq:info});
			
				
			})
		}(this.booms[i],i,this.info,this.ref))
	}
}




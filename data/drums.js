//use exports golbal to send data to views
//each drum has a slug,name,sample URL,relative URL, and volume.
//you can add samples from teh library /public/samples
exports.data = [
	{
		'slug' : 'kick',
		'name':'Kick Drum',
		'sample':'/samples/808_KICK.wav',
		'url': '/kick',
		'vol': .7
	},
	{
		'slug' : 'kick2',
		'name':'Kick Drum 2',
		'sample':'/samples/808_LNG_KICK.wav',
		'url': '/kick2',
		'vol': .7
	},	
	{
		'slug' : 'snare',
		'name':'Snare Drum',
		'sample':'/samples/808_SNARE.wav',
		'url': '/snare',
		'vol': .9
	},	
	{
		'slug' : 'tom',
		'name':'Tom',
		'sample':'/samples/SY_TOM_1.wav',
		'url': '/tom',
		'vol': .9
	},
	{
		'slug' : 'hhclose',
		'name':'Closed Hi-Hat',
		'sample':'/samples/THIN_HH_FT.wav',
		'url': '/hhclose',
		'vol': .9
	},
	{
		'slug' : 'hhopen',
		'name':'Open Hi-Hat',
		'sample':'/samples/808_HH__OP.wav',
		'url': '/hhopen',
		'vol': .9
	},
	{
		'slug' : 'hitom',
		'name':'High Tom',
		'sample':'/samples/HOUC_TOM__SA.wav',
		'url': '/hitom',
		'vol': .9
	},	
	{
		'slug' : 'rim',
		'name':'Rim',
		'sample':'/samples/P_SN_RIM.wav',
		'url': '/rim',
		'vol': .9
	},
	{
		'slug' : 'norisnare',
		'name':'Nori Snare',
		'sample':'/samples/NORI_SN_0.wav',
		'url': '/norisnare',
		'vol': .9
	}

]
var pro = require('./mock.json')
var chat = require('./chatwith.json')
var practice=require('./practiceposition.json')
module.exports =function(){
	return {
		list:pro,
		chat:chat,
		practice:practice
	}
}

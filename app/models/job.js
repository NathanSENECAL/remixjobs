
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JobSchema   = new Schema({
    title: String,
	company: String,
	localization: String,
	category: String,
	description: String,
	contract: String,
	date: String,
	tags: [String]
});

module.exports = mongoose.model('Job', JobSchema);
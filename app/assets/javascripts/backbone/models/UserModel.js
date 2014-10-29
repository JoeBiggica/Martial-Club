var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Models.User = Backbone.Model.extend({
	initialize: function(){
		console.log("new user initialized");
	},
	defaults:{
		name: ''
	}
});
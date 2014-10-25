var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Models.School = Backbone.Model.extend({
	initialize: function(){
		console.log("new school initialized");
	},
	defaults:{
		name: ''
	}
});
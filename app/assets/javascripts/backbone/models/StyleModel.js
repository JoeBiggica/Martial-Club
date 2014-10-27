var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Models.Style = Backbone.Model.extend({
	initialize: function(){
		console.log("new style initialized");
	},
	defaults:{
		name: ''
	}
});
var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Models.Membership = Backbone.Model.extend({
	initialize: function(){
		console.log("new membership initialized");
	},
	defaults:{
		name: ''
	}
});
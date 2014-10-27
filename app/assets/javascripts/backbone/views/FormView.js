var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.FormView = Backbone.View.extend({
	events: {
		"click button.add-school" : "createSchool",
	},

	createSchool: function() {
		console.log('soos')
		debugger
		var name = this.$el.find('input[name="school-name"').val();
		var style = this.$el.find('input[name="school-style"').val();
	}
});
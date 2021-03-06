var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.SchoolListView = Backbone.View.extend({
	initialize: function(){
		this.undelegateEvents();
		Backbone.history.navigate('schools', {trigger: true});
		this.listenTo(this.collection, 'add', this.addOne);

	},

	addOne: function(item){
		var school = new MartialClub.Views.SchoolView({ model: item })
		school.render();
		
		this.$el.append(school.el)
	},
})
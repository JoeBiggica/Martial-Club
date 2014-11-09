var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.SchoolModalListView = Backbone.View.extend({
	initialize: function(){
		debugger
		this.listenTo(this.collection, 'add', this.addOne);
	},
	addOne: function(item){
		debugger
		var school = new MartialClub.Views.SchoolView({ model: item })
		school.render();
		this.$el.append(school.el)
	},
})
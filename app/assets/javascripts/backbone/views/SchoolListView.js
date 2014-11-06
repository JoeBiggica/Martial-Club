var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

var AppRouter = Backbone.Router.extend({
	routes : {
		"schools" : "schools",
		"styles" : "styles"
	}
});

var router = new AppRouter();

MartialClub.Views.SchoolListView = Backbone.View.extend({
	initialize: function(){
		// router.navigate('schools', {trigger: true})
		this.listenTo(this.collection, 'add', this.addOne);
	},
	addOne: function(item){
		var school = new MartialClub.Views.SchoolView({ model: item })
		school.render();
		
		this.$el.append(school.el)
	}
})
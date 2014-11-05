var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

var AppRouter = Backbone.Router.extend({
	routes : {
		"schools" : "schools",
		"styles" : "styles"
	}
});

var router = new AppRouter();

MartialClub.Views.StyleListView = Backbone.View.extend({
	initialize: function(){
		// router.navigate('styles', {trigger: true})
		this.listenTo(this.collection, 'add', this.addOne);
	},
	addOne: function(item){
		var style = new MartialClub.Views.StyleView({ model: item })
		style.render();
		this.$el.append(style.el)
	}
})
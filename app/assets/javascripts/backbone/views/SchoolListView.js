var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

var router = new MartialClub.Routers.AppRouter;

MartialClub.Views.SchoolListView = Backbone.View.extend({
	initialize: function(){
		Backbone.history.navigate('schools', {trigger: true});
		this.listenTo(this.collection, 'add', this.addOne);
	},
	addOne: function(item){
		var school = new MartialClub.Views.SchoolView({ model: item })
		school.render();
		
		this.$el.append(school.el)
	}
})
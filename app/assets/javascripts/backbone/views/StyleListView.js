var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.StyleListView = Backbone.View.extend({
	initialize: function(){
		Backbone.history.navigate('styles', {trigger: true});
		this.listenTo(this.collection, 'add', this.addOne);
	},
	addOne: function(item){
		var style = new MartialClub.Views.StyleView({ model: item })
		style.render();
		this.$el.append(style.el)
	}
})
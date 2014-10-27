var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.StyleListView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.addOne);
	},
	addOne: function(item){
		var style = new MartialClub.Views.StyleView({ model: item })
		style.render();
		// console.log(this.$el)
		this.$el.append(style.el)
		// var self = this;
		// this.$el.empty();
		// _.each(this.collection.models, function(school){
		// 	var schoolView = new MartialClub.Views.SchoolView({model: school})
		// 	self.$el.append( schoolView.render() );
		// })
	}
})
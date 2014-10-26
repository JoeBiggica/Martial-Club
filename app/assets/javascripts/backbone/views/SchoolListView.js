var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.SchoolListView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.addOne);
	},
	addOne: function(item){

		var school = new MartialClub.Views.SchoolView({ model: item })
		school.render();
		
		$('.schools-list')[0].appendChild(school.el)
		// var self = this;
		// this.$el.empty();
		// _.each(this.collection.models, function(school){
		// 	var schoolView = new MartialClub.Views.SchoolView({model: school})
		// 	self.$el.append( schoolView.render() );
		// })
	}
})
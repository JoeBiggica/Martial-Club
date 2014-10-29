var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.UserListView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.addOne);
	},
	addOne: function(item){
		var user = new MartialClub.Views.UserView({ model: item })
		user.render();

		// this.$el.append(user.el)
	}
})
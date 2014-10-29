var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.UserView = Backbone.View.extend({
	initialize: function(){
		this.render();
		this.listenTo( this.model, "change", this.render );
		this.listenTo( this.model, "destroy", this.remove );
	},

	tagName: 'li',
	template: _.template( $('#user-list-template').html() ),
	userPageTemplate: _.template( $('#user-page-template').html() ),
	editUserTemplate: _.template( $('#edit-user-template').html() ),

	events: {
		"click i.edit-button" : "edit",
	},

	edit: function() {
		this.$el.empty();
		this.$el.html(this.editUserTemplate( { user: this.model.toJSON() }));
		
	},

	render: function(){
		this.$el.empty();
		this.$el.html(this.userPageTemplate( { user: this.model.toJSON() }));
	},

});
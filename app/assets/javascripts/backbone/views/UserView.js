var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

var usersCollection = new MartialClub.Collections.UserCollection();

MartialClub.Views.UserView = Backbone.View.extend({
	initialize: function(){
		this.undelegateEvents();
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
		"click i.save-button" : "save",
	},

	edit: function() {
		this.$el.empty();
		this.$el.html(this.editUserTemplate( { user: this.model.toJSON() }));
		
	},

	save: function() {
		var firstName = this.$el.find('input[name="first_name"]').val();
		var lastName = this.$el.find('input[name="last_name"]').val();
		var profileURL = this.$el.find('input[name="profile_url"]').val();

		this.model.set('first_name', firstName);
		this.model.set('last_name', lastName);
		this.model.set('profile_url', profileURL);
		this.model.save();

		$('#login-name').html(firstName) 
		$('.profile-pic-home').html(profileURL)

		this.$el.empty();
		this.$el.html(this.userPageTemplate( { user: this.model.toJSON() }))
	},

	render: function(){
		this.$el.empty();
		this.$el.html(this.userPageTemplate( { user: this.model.toJSON() }));
	},

});
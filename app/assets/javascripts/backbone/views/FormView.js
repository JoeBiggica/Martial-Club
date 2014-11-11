var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

var schoolsCollection = new MartialClub.Collections.SchoolCollection();
var stylesCollection = new MartialClub.Collections.StyleCollection();

MartialClub.Views.FormView = Backbone.View.extend({
	initialize: function() {
		this.undelegateEvents();
		Backbone.history.navigate('schools/create', {trigger: true});
	},

	events: {
		"click button#add-school" : "createSchool",
	},

	createSchool: function() {

		var name = this.$el.find('input[name="school-name"]').val();
		var style = this.$el.find('select[name="school-style"]').val();
		var newStyle = this.$el.find('input[name="new-style"]').val();
		var country = this.$el.find('input[name="school-country"]').val();
		var description = this.$el.find('textarea[name="school-description"]').val();
		var lineage = this.$el.find('textarea[name="school-lineage"]').val();
		var address = this.$el.find('input[name="school-address"]').val();
		var city = this.$el.find('input[name="school-city"]').val();
		var state = this.$el.find('input[name="school-state"]').val();
		var zipcode = this.$el.find('input[name="school-zipcode"]').val();
		var number = this.$el.find('input[name="school-number"]').val();
		var email = this.$el.find('input[name="school-email"]').val();
		var siteLink = this.$el.find('input[name="school-site-link"]').val();
		var facebookLink = this.$el.find('input[name="school-facebook-link"]').val();
		var twitter = this.$el.find('input[name="school-twitter"]').val();

		schoolsCollection.fetch().done(function() {
			schoolsCollection.create({
				name: name,
				style: style,
				new_style: newStyle,
				country_of_origin: country,
				description: description,
				lineage: lineage,
				address: address,
				city: city,
				state: state,
				zipcode: zipcode,
				phone_number: number,
				email: email,
				site_link: siteLink,
				facebook_link: facebookLink,
				twitter_link: twitter
			});
		});

		stylesCollection.fetch().done(function() {
			if (newStyle != ""){
				console.log('fuck')
				stylesCollection.create({name: newStyle})
			};
		});
	},

});
var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

var dispatcher = _.clone(Backbone.Events)
var memberships = new MartialClub.Collections.MembershipCollection();
var styles

MartialClub.Views.SchoolView = Backbone.View.extend({
	initialize: function(){
		// this.undelegateEvents();
		this.listenTo( this.model, "change", this.render );
		this.listenTo( this.model, "destroy", this.remove );
	},

	tagName: 'li',
	template: _.template( $('#school-list-template').html() ),
	schoolPageTemplate: _.template( $('#school-page-template').html() ),
	schoolEditTemplate: _.template( $('#school-edit-template').html() ),

	events: {
		"click a.school-name" : "seeSchool",
		"click img.school-list-logo" : "seeSchool",
	},

	seeSchool: function() {	
		Backbone.history.navigate('schools/' + encodeURI(this.model.attributes.name), {trigger: true});
		$('.transform').remove();
		$('.container').append('<div class="transform"> </div>')
		var schoolPage = new MartialClub.Views.SchoolPageView({ model: this.model, el: $('.transform')});
		schoolPage.render();

		$('#style-info').modal('hide')
	},

	render: function(){
		this.$el.empty();
		this.$el.html(this.template( { school: this.model.toJSON() }));
		// this.delegateEvents();
	},
	
});

MartialClub.Views.SchoolPageView = Backbone.View.extend({
	initialize: function() {
		// this.undelegateEvents();
		$(document).scrollTop(1)
		this.listenTo( this.model, "change", this.render );
		this.listenTo( this.model, "destroy", this.remove );
	},

	schoolPageTemplate: _.template( $('#school-page-template').html() ),
	schoolEditTemplate: _.template( $('#school-edit-template').html() ),

	events: {
		"click h4.join-button" : "join",
		"click h5.leave-button" : "leave",
		"click i.edit-button" : "edit",
		"click i.save-button" : "save",
	},

	join: function(){
		console.log('click')

		var schoolId = this.model.id
		var userId = currentUser.id
		var style = this.model.attributes.styles[0].name
		
		memberships.create({
			user_id: userId,
			school_id: schoolId,
			style: style,
		});

		$('.join-button').remove();
		// $('.user-school-status').append('<h4 id="joined">Joined<h4><a class="leave-button"><h5>Leave</h5></a>');
	},

	leave: function(){
		console.log('click')
		var schoolId = this.model.id
		var userId = currentUser.id

		memberships.fetch().done(function() {
			membership = memberships.where({user_id: Number(userId), school_id: Number(schoolId)})[0]
			membership.destroy();
		})

		$('.leave-area').remove();
		// $('.user-school-status').append('<a class="join-button"><h4>Join<h4></a>');
	},

	edit: function(){
		console.log('Connect goddamnit')
		this.$el.empty();
		this.$el.html(this.schoolEditTemplate( { school: this.model.toJSON() }));
	},

	save: function(){
		var name = this.$el.find('input[name="name"]').val();
		var style = this.$el.find('input[name="style"]').val();
		var number = this.$el.find('input[name="phone_number"]').val();
		var address = this.$el.find('input[name="address"]').val();
		var city = this.$el.find('input[name="city"]').val();
		var state = this.$el.find('input[name="state"]').val();
		var zipcode = this.$el.find('input[name="zipcode"]').val();
		var email = this.$el.find('input[name="email"]').val();
		var site = this.$el.find('input[name="site_link"]').val();
		var facebook = this.$el.find('input[name="facebook_link"]').val();
		var twitter = this.$el.find('input[name="twitter_link"]').val();
		var description = this.$el.find('textarea[name="description"]').val();
		var lineage = this.$el.find('textarea[name="lineage"]').val();
		var countryOfOrigin = this.$el.find('input[name="country_of_origin"]').val();
		var logoURL = this.$el.find('input[name="logo-url"]').val();

		this.model.set('name', name);
		this.model.set('style', style);
		this.model.set('number', number);
		this.model.set('address', address);
		this.model.set('city', city);
		this.model.set('state', state);
		this.model.set('zipcode', zipcode);
		this.model.set('email', email);
		this.model.set('site', site);
		this.model.set('facebook', facebook);
		this.model.set('twitter', twitter);
		this.model.set('description', description);
		this.model.set('lineage', lineage);
		this.model.set('country_of_origin', countryOfOrigin);
		this.model.set('logo_url', logoURL);
		this.model.save();

		this.$el.empty();
		this.$el.html(this.schoolPageTemplate( { school: this.model.toJSON() }))
	},

	render: function(){
		this.$el.empty();
		this.$el.html(this.schoolPageTemplate( { school: this.model.toJSON() }));

		var geocoder = new google.maps.Geocoder();
		
		var address = ""
		address += this.model.attributes.address + " "
		address += this.model.attributes.city + ", "
		address += this.model.attributes.state			
		
		geocoder.geocode({'address': address}, function(results, status) {
			
			if (status == google.maps.GeocoderStatus.OK) {
				var latitude = results[0].geometry.location.k;
				var longitude = results[0].geometry.location.B;
				var location = new google.maps.LatLng(latitude, longitude);
				console.log(location)
				// bounds.extend(location)

				var mapOptions = {
					zoom: 14,
					center: location
				}

				var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
				var marker = new google.maps.Marker({
		      		position: location,
		      		map: map,
		  		});
			}
		});

	},


});
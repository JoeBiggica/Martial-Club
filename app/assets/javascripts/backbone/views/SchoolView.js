var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

var memberships = new MartialClub.Collections.MembershipCollection();
var styles

MartialClub.Views.SchoolView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render );
		this.listenTo( this.model, "destroy", this.remove );
	},

	tagName: 'li',
	template: _.template( $('#school-list-template').html() ),
	schoolPageTemplate: _.template( $('#school-page-template').html() ),
	schoolEditTemplate: _.template( $('#school-edit-template').html() ),

	events: {
		"click a.school-name" : "seeSchool",
	},

	seeSchool: function() {	
		$('.transform').empty();
		var schoolPage = new SchoolPageView({ model: this.model, el: $('.transform')});
		schoolPage.render();
	},

	render: function(){
		this.$el.empty();
		this.$el.html(this.template( { school: this.model.toJSON() }));
	},
	
});

var SchoolPageView = Backbone.View.extend({
	initialize: function() {
		// this.listenTo( this.model, "change", this.render );
		// this.listenTo( this.model, "destroy", this.remove );
	},

	schoolPageTemplate: _.template( $('#school-page-template').html() ),
	schoolEditTemplate: _.template( $('#school-edit-template').html() ),

	events: {
		"click a.join-button" : "join",
		"click a.leave-button" : "leave",
		"click i.edit-button" : "edit",
		"click i.save-button" : "save",
	},

	join: function(){
		var schoolId = this.model.id
		var userId = currentUser.id
		var style = this.model.attributes.styles[0].name
		
		memberships.fetch().done(function() {
			memberships.create({
				user_id: userId,
				school_id: schoolId,
				style: style
			});
		});



		$('.join-button').empty();
		// $('.user-school-status').append('<h4 id="joined">Joined<h4><a class="leave-button"><h5>Leave</h5></a>');
	},

	leave: function(){
		var schoolId = this.model.id
		var userId = currentUser.id

		memberships.fetch().done(function() {
			membership = memberships.where({user_id: Number(userId), school_id: Number(schoolId)})[0]
			membership.destroy();
		})

		$('.leave-button').empty();
		$('#joined').empty();
		// $('.user-school-status').append('<a class="join-button"><h4>Join<h4></a>');
	},

	edit: function(){
		console.log('Connect goddamnit')
		this.$el.empty();
		this.$el.html(this.schoolEditTemplate( { school: this.model.toJSON() }));
	},

	save: function(){
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
		this.$el.empty()
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

	}


});
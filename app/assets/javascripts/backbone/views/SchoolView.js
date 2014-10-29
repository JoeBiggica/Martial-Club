var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

var memberships = new MartialClub.Collections.MembershipCollection();

MartialClub.Views.SchoolView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render );
		this.listenTo( this.model, "destroy", this.remove );
	},

	tagName: 'li',
	template: _.template( $('#school-list-template').html() ),
	schoolPageTemplate: _.template( $('#school-page-template').html() ),

	events: {
		"click a.school-name" : "seeSchool",
		// "click a.join-button" : "joinSchool",
		// "click a.leave-button" : "leaveSchool"
	},

	seeSchool: function() {
		
		$('.transform').empty();
		$('.transform').html(this.schoolPageTemplate( { school: this.model.toJSON() }));

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

		$('.join-button').on('click', function(){
			var schoolId = $('.school-id')[0].id
			var userId = $('.user_id')[0].id

			memberships.fetch().done(function() {
				memberships.create({
					user_id: userId,
					school_id: schoolId
				});
			});


			$('.join-button').empty();

		});

		$('.leave-button').on('click', function(){
			var schoolId = $('.school-id')[0].id
			var userId = $('.user_id')[0].id

			memberships.fetch().done(function() {
				membership = memberships.where({user_id: Number(userId), school_id: Number(schoolId)})[0]
				membership.destroy();
			})

			$('.leave-button').empty();
			$('#joined').empty();

		});



	},

	render: function(){
		this.$el.empty();
		this.$el.html(this.template( { school: this.model.toJSON() }));
	},
	
});
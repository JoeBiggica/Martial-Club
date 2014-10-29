var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

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
	},

	render: function(){
		this.$el.empty();
		this.$el.html(this.template( { school: this.model.toJSON() }));


	},
	
});
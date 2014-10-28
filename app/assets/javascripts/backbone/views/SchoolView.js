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
		function initializeMap() {
		
			var map = new google.maps.Map(document.getElementById('map-canvas'));
			var bounds = new google.maps.LatLngBounds();
			var locationArray = []
			var geocoder = new google.maps.Geocoder();
			

			// _.each(contacts.models, function(model) {
			// 	var latitude;
			// 	var longitude;
			// 	var location;
				
				var address = $('#address')[0].innerText;
				
				geocoder.geocode({'address': address}, function(results, status) {
					
					if (status == google.maps.GeocoderStatus.OK) {
						var latitude = results[0].geometry.location.k;
						var longitude = results[0].geometry.location.B;
						var location = new google.maps.LatLng(latitude, longitude);
						console.log(location)
						bounds.extend(location)

						var marker = new google.maps.Marker({
				      		position: location,
				      		map: map,
				  		});
					}

				
					// google.maps.event.addListener(marker, 'click', function() {
					// 	new ModalView({model: model})
					// 	$('#info').modal('show')
					// });
					
				});

				
			// })
			setTimeout(function() {
				google.maps.event.trigger(map, "resize");
				map.fitBounds(bounds);
			}, 300);

		}
		$('.transform').empty();
		$('.transform').html(this.schoolPageTemplate( { school: this.model.toJSON() }));
		initializeMap();
	},

	render: function(){
		this.$el.empty();
		this.$el.html(this.template( { school: this.model.toJSON() }));
		// var school = this.$el.html('<a>' + this.model.attributes.name + '</a>')[0]
		// school.className = 'school-name'
		// school.id = 'school-' + this.model.attributes.id
		// $('.schools-list').append(school)

	},
	destroyPenguin: function(e){
		e.preventDefault();
		this.model.destroy();
	},
	renderEditForm: function(){
		var self = this;
		this.$el.html(this.editTemplate( this.model.attributes ));

		//Event listeners for the form and cancel button
		this.$el.find('form').on("submit", function(e){
			e.preventDefault();
			var nameField = self.$el.find('input');
			var newName = nameField.val();
			// nameField.val('');
			// to test what 'this' is in the current scope
			// console.log(this);
			self.model.set('name', newName);
			self.model.save();
		})

		this.$el.find('button').on('click', function(e){
			e.preventDefault;
			self.render();
		})
	},
});
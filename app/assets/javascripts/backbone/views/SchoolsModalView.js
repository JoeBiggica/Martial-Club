var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.SchoolsModalView = Backbone.View.extend({
		modalTemplate: _.template( $('#schools-modal-template').html() ),
		
		initialize: function(){
			console.log("initializing " + this.model.length + " school models");
			this.render();
		},

		render: function(){
			var myTemplate = this.modalTemplate( { schools: this.model } );
		   	this.$el.html(myTemplate);
		   	console.log(myTemplate)
		   	$('.modal-content').last().empty()
		   	$('.modal-content').last().append(this.$el);

		}
	});
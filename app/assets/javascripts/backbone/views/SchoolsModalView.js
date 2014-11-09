var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.SchoolsModalView = Backbone.View.extend({
	modalTemplate: _.template( $('#schools-modal-template').html() ),
	
	initialize: function(){
		console.log("initializing " + this.model.length + " school models");
		this.render();
	},

	render: function(){
		
		
		var template = this.modalTemplate();
	   	this.$el.html(template);
		$('.modal-content').last().empty()
	   	$('.modal-content').last().append(this.$el);

		_.each(this.model, function(item) {
			var school = new MartialClub.Views.SchoolView({ model: item })
			school.render()
			$('.style-schools-list').append(school.el)
		})



	   	
	}
});
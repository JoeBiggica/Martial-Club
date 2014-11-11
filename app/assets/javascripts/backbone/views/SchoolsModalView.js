var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.SchoolsModalView = Backbone.View.extend({
	modalTemplate: _.template( $('#schools-modal-template').html() ),
	
	initialize: function(){
		this.render();
	},

	render: function(){

		var template = this.modalTemplate();
	   	this.$el.html(template);
		$('.style-modal').empty()
	   	$('.style-modal').append(this.$el);

		$('.modal-title').last().append('Schools that teach this style')

		_.each(this.model, function(item) {
			var school = new MartialClub.Views.SchoolView({ model: item })
			school.render()
			$('.style-schools-list').append(school.el)
			$('.style-schools-list').append(school.model.attributes.address + ' ' + school.model.attributes.city + ', ' + school.model.attributes.state + '<br/><br/>')
		})	
	}
});
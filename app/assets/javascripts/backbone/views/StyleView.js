var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.StyleView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render );
		this.listenTo( this.model, "destroy", this.remove );
	},

	tagName: 'li',
	template: _.template( $('#style-list-template').html() ),

	events: {
		"click a.style-name" : "seeStyleInfo",
	},

	seeStyleInfo: function() {
		
		// $('.below-header').empty();
		// $('.below-header').html(this.schoolPageTemplate( { school: this.model.toJSON() }));
		
		// $('.schools').toggle();
		// schoolPage.toggle();
	},

	render: function(){
		this.$el.empty();
		this.$el.html(this.template( { style: this.model.toJSON() }));
		// var school = this.$el.html('<a>' + this.model.attributes.name + '</a>')[0]
		// school.className = 'school-name'
		// school.id = 'school-' + this.model.attributes.id
		// $('.schools-list').append(school)

	},

});
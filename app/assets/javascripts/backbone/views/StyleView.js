var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

var dispatcher = _.clone(Backbone.Events);

MartialClub.Views.StyleView = Backbone.View.extend({
	initialize: function(){
		this.undelegateEvents();
		this.listenTo( this.model, "change", this.render );
		this.listenTo( this.model, "change:[attribute]", this.render );
		this.listenTo( this.model, "add", this.render );
		this.listenTo( this.model, "destroy", this.remove );
	},

	tagName: 'li',
	template: _.template( $('#style-list-template').html() ),

	events: {
		"click a.style-item" : "seeSchools",
	},

	seeSchools: function() {
		Backbone.history.navigate('styles/' + encodeURI(this.model.attributes.name), {trigger: true});
		var schoolWithStyle = this.model.attributes.schools

		var schoolModel = []
		_.each(schoolWithStyle, function(school) {
			model = new MartialClub.Models.School(school);
			schoolModel.push(model);
		});

		var modal = new MartialClub.Views.SchoolsModalView({ model: schoolModel })
	},

	render: function(){
		this.$el.empty();
		this.$el.html(this.template( { style: this.model.toJSON() }));

	},

});


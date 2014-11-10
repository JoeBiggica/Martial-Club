var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {}, Routers: {} };

MartialClub.Routers.AppRouter = Backbone.Router.extend({
	routes : {
		""                : "home",
		"schools"         : "schools",
		"schools/:id"     : "schoolsShow",
		"schools/create"  : "schoolsPost",
		"styles"		  : "styles",
		"styles/:id"	  : "stylesShow",
	},

	initialize: function () {
		this.routesHit = 0;
		Backbone.history.on('route', function() { this.routesHit++; }, this);
    },

});
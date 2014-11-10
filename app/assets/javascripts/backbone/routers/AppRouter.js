var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {}, Routers: {} };

MartialClub.Routers.AppRouter = Backbone.Router.extend({
	routes : {
		""                : "home",
		"schools"         : "schools",
		"schools/:id"     : "show",
	},

	initialize: function () {
		this.routesHit = 0;
		Backbone.history.on('route', function() { this.routesHit++; }, this);
    },

});
var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {}, Routers: {} };

MartialClub.Routers.AppRouter = Backbone.Router.extend({
	routes : {
		""                : "home",
		"schools"         : "schools",
		"schools/:name"   : "schoolsShow",
		"schools/create"  : "schoolsPost",
		"styles"		  		: "styles",
		"styles/:name"	  : "stylesShow",
	},

	initialize: function () {

	},

});
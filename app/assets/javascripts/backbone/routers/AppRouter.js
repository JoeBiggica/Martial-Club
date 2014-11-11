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

	// schoolsShow:function () {
 //    require([
 //        'views/contact'
 //    ], $.proxy(function (ContactView) {
 //        this.setCurrentView(ContactView).render();
 //    }, this));
	// },

	// setCurrentView:function (view) {
	//     if (view != this._currentView) {
	//         if (this._currentView != null && this._currentView.remove != null) {
	//             this._currentView.remove();
	//         }
	//         this._currentView = new view();
	//     }
	//     return this._currentView;
	// },

});
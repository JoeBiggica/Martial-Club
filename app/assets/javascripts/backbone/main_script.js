var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

var AppRouter = Backbone.Router.extend({
	routes : {
		"/" : "root",
		"schools" : "schools",
		"styles" : "styles"
	}
});

var router = new AppRouter();

function transform(template){
	var transformTemplate = _.template( template.html() );
	$('.transform').empty();
	$('.transform').html(transformTemplate);	
}

function schoolsInitialize(){
	transform($('#transform-schools-template'))

	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var schoolsListView = new MartialClub.Views.SchoolListView({
		collection: schoolsCollection,
		el: $('.schools-list')
	});

	schoolsCollection.fetch();
}

function stylesInitialize(){
	transform($('#transform-styles-template'))

	var stylesCollection = new MartialClub.Collections.StyleCollection();
	var stylesListView = new MartialClub.Views.StyleListView({
		collection: stylesCollection,
		el: $('.styles-list')
	})
	stylesCollection.fetch();
}

function usersInitialize(){
	transform($('#transform-users-template'))

	var usersCollection = new MartialClub.Collections.UserCollection();
	var usersListView = new MartialClub.Views.UserListView({
		collection: usersCollection, 
	})
	usersCollection.fetch();
}

function getUser(){
	transform($('#transform-users-template'))

	var usersCollection = new MartialClub.Collections.UserCollection();
	usersCollection.fetch().done(function(){
		
		var user = usersCollection.get($('.user_id')[0].id)

		console.log(user)
		var userView = new MartialClub.Views.UserView({ model: user, el: $('.users') });
		// var template = _.template( $('#user-page-template').html() );
		// console.log(user.id)
		// console.log(user.styles)
		// console.log(user.first_name)
		// $('.users').append(template({ user: user}))

	})

	
}
var currentUser;
$.get('/users/?returnUser=true').done(function(response){
	 currentUser = response
	console.log('soos')
})

$(function(){


		transform($('#home-template'));
	
	

	var usersCollection = new MartialClub.Collections.UserCollection();
	usersCollection.fetch();

	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var formView = new MartialClub.Views.FormView({ el: $('.add-school-form'), collection: schoolsCollection })
	

	$('.home-button').on('click', function(){
		transform($('#home-template'));
	});

	$('.schools-button').on('click', function(){
		schoolsInitialize();
	});

	$('.styles-button').on('click', function() {
		stylesInitialize();
	});

	$('.profile-pic-home').on('click', function(){
		getUser()
	});

	$('#login-name').on('click', function(){
		getUser()
	})

	$('.join-button').on('click', function(){
		schoolsInitialize();
	})

// 
// Search Bar
// 
	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var stylesCollection = new MartialClub.Collections.StyleCollection();

	searchArray = []
	function autoComplete(searchBar) {
		stylesCollection.fetch().done(function() {
			_.each(stylesCollection.models, function(model) {
				searchArray.push(model.attributes.name)
			});
			searchBar.autocomplete({source: searchArray});
		})
		
	};
	autoComplete($('#search-bar'));

	$('#search-bar').on('keyup', function(e) {
		if (e.keyCode == 13) {
			transform($('#transform-search-template'))
			_.each(stylesCollection.models, function(model) {
				
				if ($('#search-bar').val() == model.attributes.name) {
					var style = new MartialClub.Views.StyleView({ model:  model});
					style.render();
					
					$('.search-results').append(style.el);
				}
			})
		}

		if ($('.search').val() == "") {
		$('.search-items').empty();
		}

	})
	Backbone.history.start();

});




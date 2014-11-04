var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };


function transform(){
	$('.transform').empty();
	$('.transform').html("<div class='row schools'><ul class='col-md-4 col-md-offset-2 schools-list'></ul></div><div class='row styles'><ul class='col-md-4 col-md-offset-8 styles-list'></ul></div><div class='row users'><ul class='col-md-4col-md-offset-1 users-list'></ul></div><div class='row search-results'></div>");	
}

function schoolsInitialize(){
	transform()

	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var schoolsListView = new MartialClub.Views.SchoolListView({
		collection: schoolsCollection,
		el: $('.schools-list')
	});

	schoolsCollection.fetch();
}

function stylesInitialize(){
	transform()

	var stylesCollection = new MartialClub.Collections.StyleCollection();
	var stylesListView = new MartialClub.Views.StyleListView({
		collection: stylesCollection,
		el: $('.styles-list')
	})
	stylesCollection.fetch();
}

function usersInitialize(){
	transform()

	var usersCollection = new MartialClub.Collections.UserCollection();
	var usersListView = new MartialClub.Views.UserListView({
		collection: usersCollection, 
	})
	usersCollection.fetch();
}

function getUser(){
	transform()

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


	transform()
	
	var AppRouter = Backbone.Router.extend({
		routes: {
			"schools": "schools",
			"school": "school"
		}
	});

	var router = new AppRouter;
	router.on('route:schools', function(){
			console.log('soos')
			schoolsInitialize();
	});



	var usersCollection = new MartialClub.Collections.UserCollection();
	usersCollection.fetch();

	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var formView = new MartialClub.Views.FormView({ el: $('.add-school-form'), collection: schoolsCollection })
	

	$('.schools-button').on('click', function(){
		// window.location.href = "/#schools";
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
			transform()
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




var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };


function transform(){
	$('.transform').empty();
	$('.transform').html("<div class='row schools'><ul class='col-md-4 col-md-offset-2 schools-list'></ul></div><div class='row styles'><ul class='col-md-4 col-md-offset-8 styles-list'></ul></div><div class='row users'><ul class='col-md-4col-md-offset-1 users-list'></ul></div>");	
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
		// 
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
	
	// var AppRouter = Backbone.Router.extend({
	// 	routes: {
	// 		"schools": "schools",
	// 		"school": "school"
	// 	}
	// });

	// var router = new AppRouter;
	// router.on('route:schools', function(){
	// 		console.log('soos')
	// 		schoolsInitialize();
	// });



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

	Backbone.history.start();

});




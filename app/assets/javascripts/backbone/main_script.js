var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {}, Routers: {} };

function transform(template){
	var transformTemplate = _.template( template.html() );
	$('.transform').remove();
	$('.container').append('<div class="transform"> </div>')
	$('.transform').html(transformTemplate);	
};

function transformWithVariable(template, value){
	var transformTemplate = _.template( template.html() );
	$('.transform').remove();
	$('.container').append('<div class="transform"> </div>')
	$('.transform').html(transformTemplate({ variable: value }));	
};

function schoolsInitialize(){
	transform($('#transform-schools-template'))

	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var schoolsListView = new MartialClub.Views.SchoolListView({
		collection: schoolsCollection,
		el: $('.schools-list')
	});

	schoolsCollection.fetch();
};

function stylesInitialize(){
	transform($('#transform-styles-template'))

	var stylesCollection = new MartialClub.Collections.StyleCollection();
	var stylesListView = new MartialClub.Views.StyleListView({
		collection: stylesCollection,
		el: $('.styles-list')
	})
	stylesCollection.fetch();
};

function usersInitialize(){
	transform($('#transform-users-template'))

	var usersCollection = new MartialClub.Collections.UserCollection();
	var usersListView = new MartialClub.Views.UserListView({
		collection: usersCollection, 
	})
	usersCollection.fetch();
};

function getUser(){
	transform($('#transform-users-template'))
	$('.transform').css({'height': '2px', 'padding-top': '20px'})
	var usersCollection = new MartialClub.Collections.UserCollection();
	usersCollection.fetch().done(function(){
		
		var user = usersCollection.get($('.user_id')[0].id)

		console.log(user)
		var userView = new MartialClub.Views.UserView({ model: user, el: $('.users') });
	})	
};

var currentUser;
$.get('/users/?returnUser=true').done(function(response){
	currentUser = response
});

$(function(){

	router = new MartialClub.Routers.AppRouter;

	router.on('route:home', function() {
       transform($('#home-template'));
    });

    router.on('route:schools', function() {
    	schoolsInitialize();
    });

    router.on('route:styles', function() {
    	stylesInitialize();
    });

    router.on('route:user/:name', function() {
    	getUser();
    });
	

	var usersCollection = new MartialClub.Collections.UserCollection();
	usersCollection.fetch();

	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var formView = new MartialClub.Views.FormView({ el: $('.add-school-form'), collection: schoolsCollection })
	

	$('.home-button').on('click', function(){
		Backbone.history.navigate('', {trigger: true})
		transform($('#home-template'));
	});

	$('#logo-corner').on('click', function(){
		Backbone.history.navigate('', {trigger: true})
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

		schoolsCollection.fetch().done(function() {
			_.each(schoolsCollection.models, function(model) {
				searchArray.push(model.attributes.name)
			});
			searchBar.autocomplete({source: searchArray});
		})
		
	};
	autoComplete($('#search-bar'));

	function search() {
		transformWithVariable($('#transform-search-template'), $('#search-bar').val())
		_.each(stylesCollection.models, function(model) {
			
			if ($('#search-bar').val().toLowerCase() == model.attributes.name.toLowerCase() || model.attributes.name.toLowerCase().indexOf($('#search-bar').val().toLowerCase()) > -1) {
				var style = new MartialClub.Views.StyleView({ model:  model});
				style.render();
				
				$('.search-results-styles').append(style.el);
			};
		});

		_.each(schoolsCollection.models, function(model) {
			if ($('#search-bar').val().toLowerCase() == model.attributes.name.toLowerCase() || model.attributes.name.toLowerCase().indexOf($('#search-bar').val().toLowerCase()) > -1) {
				var school = new MartialClub.Views.SchoolView({ model:  model});
				school.render();

				$('.search-results-schools').append(school.el);
			};
		});
		$('#search-bar').val('')
	}

	$('#search-bar').on('keyup', function(e) {
		if (e.keyCode == 13) {
			search();
		};

		if ($('.search').val() == "") {
			$('.search-items').empty();
		};
	})

	$('.fa-search').on('click', function() {
		search();

		if ($('.search').val() == "") {
			$('.search-items').empty();
		}

	})
	

// 
// UI
// 

	$(".login-link").click(function() {
	 
	  $(".sign-up-box").hide("pulsate");
	   $(".login-box").show("pulsate");
	});

	Backbone.history.start();

});




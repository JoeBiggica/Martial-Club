var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

function schoolsInitialize(){
	$('.transform').empty();
	$('.transform').html("<div class='row schools'><ul class='col-md-4 col-md-offset-1 schools-list'></ul></div><div class='row styles'><ul class='col-md-4 col-md-offset-1 styles-list'></ul></div>");

	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var schoolsListView = new MartialClub.Views.SchoolListView({
		collection: schoolsCollection,
		el: $('.schools-list')
	});

	schoolsCollection.fetch();
}

function stylesInitialize(){
	$('.transform').empty();
	$('.transform').html("<div class='row schools'><ul class='col-md-4 col-md-offset-1 schools-list'></ul></div><div class='row styles'><ul class='col-md-4 col-md-offset-1 styles-list'></ul></div>");

	var stylesCollection = new MartialClub.Collections.StyleCollection();
	var stylesListView = new MartialClub.Views.StyleListView({
		collection: stylesCollection,
		el: $('.styles-list')
	})
	stylesCollection.fetch();
}


$(function(){


	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var formView = new MartialClub.Views.FormView({ el: $('.add-school-form'), collection: schoolsCollection })
	
	$('.schools-button').on('click', function(){
		schoolsInitialize();
	});

	$('.styles-button').on('click', function() {
		stylesInitialize();
	});

	$('#add-school').on('click', function(){
		
	});

});




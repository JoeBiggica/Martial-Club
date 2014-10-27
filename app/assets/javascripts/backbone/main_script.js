var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

// MartialClub.initialize = function(){
// 	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
// 	var stylesCollection = new MartialClub.Collections.StyleCollection();

// 	var schoolsListView = new MartialClub.Views.SchoolListView({
// 		collection: schoolsCollection,
// 		el: $('.schools-list')
// 	});

// 	var stylesListView = new MartialClub.Views.StyleListView({
// 		collection: stylesCollection,
// 		el: $('.styles-list')
// 	})

// 	schoolsCollection.fetch();
// 	stylesCollection.fetch();

// 	var formView = new MartialClub.Views.FormView({ el: $('.add-school-form'), collection: schoolsCollection })

// }


$(function(){

	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var formView = new MartialClub.Views.FormView({ el: $('.add-school-form'), collection: schoolsCollection })
	
	$('.schools-button').on('click', function(){

		$('.transform').empty();
		$('.transform').html("<div class='row schools'><ul class='col-md-4 col-md-offset-1 schools-list'></ul></div><div class='row styles'><ul class='col-md-4 col-md-offset-1 styles-list'></ul></div>");

		var schoolsCollection = new MartialClub.Collections.SchoolCollection();
		var schoolsListView = new MartialClub.Views.SchoolListView({
			collection: schoolsCollection,
			el: $('.schools-list')
		});

		schoolsCollection.fetch();
	});

	$('.styles-button').on('click', function() {
		
		$('.transform').empty();
		$('.transform').html("<div class='row schools'><ul class='col-md-4 col-md-offset-1 schools-list'></ul></div><div class='row styles'><ul class='col-md-4 col-md-offset-1 styles-list'></ul></div>");

		var stylesCollection = new MartialClub.Collections.StyleCollection();
		var stylesListView = new MartialClub.Views.StyleListView({
			collection: stylesCollection,
			el: $('.styles-list')
		})
		stylesCollection.fetch();
	})

});




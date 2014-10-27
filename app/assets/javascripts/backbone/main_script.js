var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.initialize = function(){
	var schoolsCollection = new MartialClub.Collections.SchoolCollection();
	var stylesCollection = new MartialClub.Collections.StyleCollection();

	var schoolsListView = new MartialClub.Views.SchoolListView({
		collection: schoolsCollection,
		el: $('.schools-list')
	});

	var stylesListView = new MartialClub.Views.StyleListView({
		collection: stylesCollection,
		el: $('.styles-list')
	})

	schoolsCollection.fetch();
	stylesCollection.fetch();

	var formView = new MartialClub.Views.FormView({ el: $('.add-school-form'), collection: schoolsCollection })

}


$(function(){

	MartialClub.initialize();

	$('.schools-button').on('click', function(){

		var schoolsCollection = new MartialClub.Collections.SchoolCollection();
		var schoolsListView = new MartialClub.Views.SchoolListView({
			collection: schoolsCollection,
			el: $('.schools-list')
		});

		schoolsCollection.fetch();
	});

	$('.styles-button').on('click', function() {
		
		var stylesCollection = new MartialClub.Collections.StyleCollection();
		var stylesListView = new MartialClub.Views.StyleListView({
			collection: stylesCollection,
			el: $('.styles-list')
		})
		stylesCollection.fetch();
	})

});




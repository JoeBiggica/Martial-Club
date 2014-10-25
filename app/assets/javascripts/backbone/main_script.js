var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };
var collection;

MartialClub.initialize = function(){
	collection = new MartialClub.Collections.SchoolCollection();

	var listView = new MartialClub.Views.SchoolListView({
		collection: collection,
		el: $('.MartialClub-list')
	});

	collection.fetch();

	// $('.penguins').find('form').on('submit', function(e){
	// 	e.preventDefault();
	// 	var penguinName = $('input').val();
	// 	$('input').val('')
	// 	collection.create({name: penguinName})
	// })
}


$(function(){
	MartialClub.initialize();

	_.each($('.schools-list > li'), function(school){
		console.log('soos')
		school.click(function(){
			console.log('soos')
			$('#' + school.id).toggle();
			$('.schools').toggle();
		})

	});

});




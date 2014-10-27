var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Collections.SchoolCollection = Backbone.Collection.extend({
	model: MartialClub.Models.School,
	url: '/schools'
});
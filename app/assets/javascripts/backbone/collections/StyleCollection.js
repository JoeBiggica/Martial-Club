var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Collections.StyleCollection = Backbone.Collection.extend({
	model: MartialClub.Models.Style,
	url: '/styles'
});
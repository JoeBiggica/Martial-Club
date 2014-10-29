var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Collections.UserCollection = Backbone.Collection.extend({
	model: MartialClub.Models.User,
	url: '/users'
});
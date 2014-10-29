var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Collections.MembershipCollection = Backbone.Collection.extend({
	model: MartialClub.Models.Membership,
	url: '/memberships'
});
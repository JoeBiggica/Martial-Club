var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.SchoolsModalView = Backbone.View.extend({
		modalTemplate: _.template( $('#schools-modal-template').html() ),
		// events: {
		// 	"click i.delete-button" : "delete",
		// 	"click i.edit-button" : "edit",
		// 	"click i.save-button" : "save",
		// 	"click i.cancel-button" : "cancel"
		// },

		// delete: function() {
		// 	this.model.destroy();
		// 	$('#info').modal('toggle');
		// },

		// edit: function() {
		// 	var currentName = this.model.attributes.name;
		// 	var currentAge = this.model.attributes.age;
		// 	var currentAddress = this.model.attributes.address;
		// 	var currentNumber = this.model.attributes.phone_number;

		// 	$('.modal-title').html('<input type="text" name="contact-name" value="' + currentName + '">&#39s Info')
		// 	$('.age').html('<input type="text" name="contact-age" value="' + currentAge + '">');
		// 	$('.address').html('<input type="text" name="contact-address" value="' + currentAddress + '">');
		// 	$('.number').html('<input type="text" name="contact-number" value="' + currentNumber + '">');

		// 	$('.modal-footer').html('<i class="fa fa-floppy-o fa-3x save-button"></i> <i class="fa fa-times-circle fa-3x cancel-button"></i>');

		// },

		// save: function() {
		// 	var name = this.$el.find('input[name="contact-name"]').val();
		// 	var age = this.$el.find('input[name="contact-age"]').val();
		// 	var address = this.$el.find('input[name="contact-address"]').val();
		// 	var number = this.$el.find('input[name="contact-number"]').val();

		// 	this.model.set('name', name);
		// 	this.model.set('age', age);
		// 	this.model.set('address', address);
		// 	this.model.set('phone_number', number);
		// 	this.model.save();
		// 	$('#info').modal('toggle');
		// },

		// cancel: function() {
		// 	$('#info').modal('toggle');
		// },

		initialize: function(){
			console.log("initializing " + this.model.length + " school models");
			this.render();
		},

		render: function(){
			var myTemplate = this.modalTemplate( { schools: this.model } );
		   	this.$el.html(myTemplate);
		   	console.log(myTemplate)
		   	$('.modal-content').last().empty()
		   	$('.modal-content').last().append(this.$el);

		}
	});
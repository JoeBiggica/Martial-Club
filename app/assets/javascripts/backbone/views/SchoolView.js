var MartialClub = MartialClub || { Models: {}, Collections: {}, Views: {} };

MartialClub.Views.SchoolView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render )
		this.listenTo( this.model, "destroy", this.remove );
	},
	tagName: 'li',
	// id: 'school',
	// editTemplate: _.template( $('#penguin-edit-template').html() ),
	// template: _.template( $('#penguin-template').html() ),
	events: {
		// 'click [data-action="destroy"]' : 'destroyPenguin',
		// 'click [data-action="edit"]' : 'renderEditForm',
		// 'mouseenter' : 'hoverOn',
		// 'mouseleave' : 'hoverOff'
	},
	render: function(){
		// this.$el.empty();
		
		// this.$el.html(this.template( this.model.attributes ));
		var school = this.$el.html(this.model.attributes.name)[0]
		school.id = 'school-' + this.model.attributes.id
		$('.schools-list').append(school)

	},
	destroyPenguin: function(e){
		e.preventDefault();
		this.model.destroy();
	},
	renderEditForm: function(){
		var self = this;
		this.$el.html(this.editTemplate( this.model.attributes ));

		//Event listeners for the form and cancel button
		this.$el.find('form').on("submit", function(e){
			e.preventDefault();
			var nameField = self.$el.find('input');
			var newName = nameField.val();
			// nameField.val('');
			// to test what 'this' is in the current scope
			// console.log(this);
			self.model.set('name', newName);
			self.model.save();
		})

		this.$el.find('button').on('click', function(e){
			e.preventDefault;
			self.render();
		})
	},
});
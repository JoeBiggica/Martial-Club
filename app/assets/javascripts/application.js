// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require turbolinks

//= require ./libraries/underscore
//= require ./libraries/backbone
//= require ./libraries/bootstrap

//= require ./backbone/main_script

//= require ./backbone/routers/AppRouter

//= require ./backbone/models/SchoolModel
//= require ./backbone/models/StyleModel
//= require ./backbone/models/UserModel
//= require ./backbone/models/MembershipModel

//= require ./backbone/collections/SchoolCollection
//= require ./backbone/collections/StyleCollection
//= require ./backbone/collections/UserCollection
//= require ./backbone/collections/MembershipCollection

//= require ./backbone/views/SchoolView
//= require ./backbone/views/SchoolListView
//= require ./backbone/views/StyleView
//= require ./backbone/views/StyleListView
//= require ./backbone/views/UserListView
//= require ./backbone/views/UserView

//= require ./backbone/views/FormView
//= require ./backbone/views/SchoolsModalView





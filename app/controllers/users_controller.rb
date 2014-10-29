class UsersController < ApplicationController

	def index
		users = User.all.to_json(include: [:styles, :schools])
		respond_to do |format|
    		format.json { render :json => users }
		end
	end

	def create
		if params["signup_email"] == params["signup_confirm_email"] && params["signup_password"] == params["confirm_password"]
			user = User.new(
				email: params["signup_email"], 
				password: params["signup_password"],
				profile_url: "http://fc09.deviantart.net/fs71/f/2011/148/5/d/5d62446baab75b8a9898af496c480103-d3hfie9.jpg"
			)

			if user.valid?
				user.save
				session[:user_id] = User.all.last.id
				redirect_to '/'
			else
				@signup_error = true
				render "session/new", layout: 'signup_login'
			end
		else 
			@signup_error = true
			render "session/new", layout: 'signup_login'
		end

	end


end
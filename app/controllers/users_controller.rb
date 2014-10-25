class UsersController < ApplicationController

	def create
		if params["signup_email"] == params["signup_confirm_email"] && params["signup_password"] == params["confirm_password"]
			user = User.new(
				email: params["signup_email"], 
				password: params["signup_password"]
			)

			if user.valid?
				user.save
				session[:user_id] = User.all.last.id
				redirect_to '/main'
			else
				@signup_error = true
				render "session/new"
			end
		else 
			@signup_error = true
			render "session/new"
		end

	end


end
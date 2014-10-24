class SessionController < ApplicationController
	def new
		render :new
	end

	def create
		
		if params["login_email"] != "" && params["login_password"] != ""
			user = User.find_by({email: params["login_email"]})

			if user && user.authenticate(params["login_password"])
				session[:user_id] = user.id
				redirect_to '/main'
			else
				@login_error = true
				render :new
			end
		else
		end

		# elsif params["signup_email"] != "" && params["signup_password"] != ""
		# 	user = User.find_by({email: params["signup_email"]})

		# 	if params["signup_email"] == 
	end

	def destroy
		reset_session
		redirect_to '/login'
	end

end
class UsersController < ApplicationController

	def index

		if params[:returnUser] 
			user = User.find(session["user_id"]).to_json(include: [:styles, :schools])
			respond_to do |format|
    			format.json { render :json => user }
			end

		else
			users = User.all.to_json(include: [:styles, :schools])
			respond_to do |format|
    			format.json { render :json => users }
			end
		end

		
	end

	def create
		if params["signup_email"] == params["signup_confirm_email"] && params["signup_password"] == params["confirm_password"]
			user = User.new(
				email: params["signup_email"], 
				password: params["signup_password"],
				profile_url: "./default_profile_url.jpg"
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

	def update
		user = User.find(params["id"])
		
		user.update(
			first_name: params["first_name"],
			last_name: params["last_name"],
			profile_url: params["profile_url"]
		)

		respond_to do |format|
    		format.json { render :json => user }
		end

	end


end
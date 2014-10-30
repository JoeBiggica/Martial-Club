class SchoolsController < ApplicationController
	
	def index
		schools = School.all.order(name: :asc).to_json(include: [:styles, :users])
		respond_to do |format|
    		format.json { render :json => schools }
		end
	end

	def create
		school = School.create({
			name: params["name"],
			country_of_origin: params["country_of_origin"],
			description: params["description"],
			lineage: params["lineage"],
			address: params["address"],
			city: params["city"],
			state: params["state"],
			zipcode: params["zipcode"],
			phone_number: params["phone_number"],
			email: params["email"],
			site_link: params["site_link"],
			facebook_link: params["facebook_link"],
			twitter_link: params["twitter_link"],
			user_id: session["user_id"]	
		})

		new_style = params["new_style"]
		
		if new_style != ""
			UserSchoolStyle.create({user_id: session["user_id"], style_id: Style.all.last.id + 1, school_id: school.id})			
		else
			existing_style = Style.find_by(name: params["style"])
			UserSchoolStyle.create({user_id: session["user_id"], style_id: existing_style.id, school_id: school.id})
		end

  		respond_to do |format|
    		format.json { render :json => school }
		end
	end

	def show 
		school = School.find(params["id"])
		styles = school.styles
		students = school.users
		followers = []
		school.followers.each do |f|
			followers << User.find(f.user_id)
		end

		render(:show, {locals: { 
			school: school, 
			styles: styles, 
			students: students, 
			followers: followers
		}})
		# school_info = {
		# 	school: school,
		# 	styles: styles,
		# 	followers: followers
		# }

		# respond_to do |format|
  #   		format.json { render :json => school_info }
		# end
	end




end
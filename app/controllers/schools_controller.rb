class SchoolsController < ApplicationController
	
	def index
		schools = School.all.order(name: :asc).pluck(:name).to_json(include: [:styles, :users])
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
			user_id: session["user_id"],	
			logo_url: './fist_avatar.png'
		})

		new_style = params["new_style"]
		style = params["style"]

		if new_style != ""
			Style.create(name: new_style)
			style_id = Style.find_by(name: new_style).id
			UserSchoolStyle.create({user_id: session["user_id"], style_id: style_id, school_id: school.id})			
		else
			existing_style = Style.find_by(name: style)
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

		school_info = {
			school: school,
			styles: styles,
			followers: followers
		}

		respond_to do |format|
    		format.json { render :json => school_info }
		end
	end

	def update
		school = School.find(params["id"])

		school.update({
			name: params["name"],
			country_of_origin: params["country_of_origin"],
			phone_number: params["number"],
			email: params["email"],
			site_link: params["site"],
			facebook_link: params["facebook"],
			twitter_link: params["twitter"],
			address: params["address"],
			city: params["city"],
			state: params["state"],
			zipcode: params["zipcode"],
			logo_url: params["logo_url"]
		})

		i = 0
		while i < params["styles"].length do
			school_style = UserSchoolStyle.find_by({style_id: params["styles"][i]["id"], school_id: school.id})

			if school_style
				school_style.destroy
			end

			i += 1
		end

		new_style = params["style"]

		if Style.find_by(name: params["style"])
			new_style_id = Style.find_by(name: params["style"]).id
			UserSchoolStyle.create({style_id: new_style_id, school_id: params["id"]})
		else
			Style.create(name: params["style"])
			new_style_id = Style.find_by(name: params["style"]).id

			UserSchoolStyle.create({style_id: new_style_id, school_id: params["id"]})	
		end

		respond_to do |format|
    		format.json { render :json => school }
		end
	end




end
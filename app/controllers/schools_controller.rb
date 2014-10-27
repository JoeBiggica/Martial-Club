class SchoolsController < ApplicationController
	
	def index
		schools = School.all.to_json(:include => :styles, :include => :users)
		respond_to do |format|
    		format.json { render :json => schools }
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
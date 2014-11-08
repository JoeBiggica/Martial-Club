class MembershipsController < ApplicationController
	
	def index
		memberships = Membership.all
		respond_to do |format|
    		format.json { render :json => memberships }
		end
	end

	def create

		membership = Membership.create({user_id: params["user_id"], school_id: params["school_id"]})

		style = Style.find_by(name: params["style"])

		unless UserSchoolStyle.find_by({user_id: session["user_id"], style_id: style.id})
			UserSchoolStyle.create({user_id: session["user_id"], style_id: style.id})
		end

		respond_to do |format|
    		format.json { render :json => membership }
		end
	end

	def destroy
		membership = Membership.find(params["id"])
		membership.destroy
		
		respond_to do |format|
    		format.json { render :json => membership }
		end
	end

end
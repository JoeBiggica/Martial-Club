class MembershipsController < ApplicationController
	
	def index
		memberships = Membership.all
		respond_to do |format|
    		format.json { render :json => memberships }
		end
	end

	def create
		membership = Membership.create({user_id: params["user_id"], school_id: params["school_id"]})

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
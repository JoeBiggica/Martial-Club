class StylesController < ApplicationController

	def index
		styles = Style.all.order(name: :asc).to_json(:include => :schools)
		respond_to do |format|
    		format.json { render :json => styles }
		end
	end

	# def create
	# 	binding.pry
	# 	style = Style.create(name: params["name"])
	# 	respond_to do |format|
 #    		format.json { render :json => style }
	# 	end
	# end

	def destroy

	end

end
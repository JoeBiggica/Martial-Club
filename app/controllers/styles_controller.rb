class StylesController < ApplicationController

	def index
		styles = Style.all.to_json(:include => :schools)
		respond_to do |format|
    		format.json { render :json => styles }
		end
	end

end
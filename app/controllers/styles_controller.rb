class StylesController < ApplicationController

	def index
		styles = Style.all.to_json(:include => :schools)
		respond_to do |format|
    		format.json { render :json => styles }
		end
	end

	def create
		style = Style.create(name: params["name"])
		respond_to do |format|
    		format.json { render :json => style }
		end
	end

end
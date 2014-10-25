class MainController < ApplicationController
	def index
		render(:index, {locals: { schools: School.all}})
	end

end
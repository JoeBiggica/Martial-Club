class UserSchoolStyle < ActiveRecord::Base
	belongs_to :style
	belongs_to :user
	belongs_to :school
end
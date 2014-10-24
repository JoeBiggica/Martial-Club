class Style < ActiveRecord::Base
	has_many :user_school_styles
	has_many :users, through: :user_school_styles
	has_many :schools, through: :user_school_styles
end
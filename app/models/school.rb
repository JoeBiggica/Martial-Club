class School < ActiveRecord::Base
	has_many :memberships, dependent: :destroy
	has_many :users, through: :memberships
	has_many :followers
	has_many :users, through: :followers
	has_many :user_school_styles
	has_many :styles, through: :user_school_styles
	has_many :photos, dependent: :destroy
end
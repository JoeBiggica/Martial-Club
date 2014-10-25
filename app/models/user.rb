class User < ActiveRecord::Base
	self.has_secure_password
	validates :password, :email, presence: true
	# validates :password, uniqueness: true
	has_many :memberships
	has_many :schools, through: :memberships
	has_many :followers
	# has_many :schools, through: :followers
	has_many :user_school_styles
	has_many :styles, through: :user_school_styles
	has_many :photos, dependent: :destroy
end
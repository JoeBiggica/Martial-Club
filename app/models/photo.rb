class Photo < ActiveRecord::Base
	belongs_to :user
	belongs_to :school
	mount_uploader :image, ImageUploader
end
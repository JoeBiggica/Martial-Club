class Logo < ActiveRecord::Base
	belongs_to :school
	mount_uploader :image, ImageUploader
end
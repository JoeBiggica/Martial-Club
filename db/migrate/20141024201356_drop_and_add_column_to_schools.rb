class DropAndAddColumnToSchools < ActiveRecord::Migration
  def change
  	remove_column :schools, :location
  	add_column :schools, :address, :text
  	add_column :schools, :city, :text
  	add_column :schools, :state, :text
  	add_column :schools, :zipcode, :integer
  end
end

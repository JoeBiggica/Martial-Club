class DropColumnStyleFromSchools < ActiveRecord::Migration
  def change
  	remove_column :schools, :style
  end
end

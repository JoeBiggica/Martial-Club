class AddColumnUsersProfileUrl < ActiveRecord::Migration
  def change
  	add_column :users, :profile_url, :text
  	add_column :schools, :logo_url, :text
  end
end

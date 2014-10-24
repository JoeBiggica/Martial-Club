class ChangeTableNameSiteStyles < ActiveRecord::Migration
  def change
  	rename_table :join_styles, :user_school_styles
  end
end

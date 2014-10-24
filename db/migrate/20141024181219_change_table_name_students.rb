class ChangeTableNameStudents < ActiveRecord::Migration
  def change
  	rename_table :students, :memberships
  end
end

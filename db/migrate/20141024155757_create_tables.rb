class CreateTables < ActiveRecord::Migration
  def change
	  create_table :users do |t|
	    t.text :first_name
	    t.text :last_name
	    t.text :email
	    t.text :password_digest
	    t.text :style
	    t.text :technique_of_choice
	    t.text :location
	    t.timestamps
	  end

	  create_table :schools do |t|
	    t.text :name
	    t.text :style
	    t.text :description
	    t.text :lineage
	    t.text :country_of_origin
	    t.text :location
	    t.text :phone_number
	    t.text :email
	    t.text :site_link
	    t.text :facebook_link
	    t.text :twitter_link
	    t.integer :user_id
	    t.boolean :verified
	    t.timestamps
	  end

	  create_table :styles do |t|
	    t.text :name
	  end

	  create_table :photos do |t|
	    t.text :title
	    t.text :location
	    t.text :image
	    t.integer :user_id
	    t.integer :school_id
	  end

	  create_table :logos do |t|
	    t.text :title
	    t.text :image
	    t.integer :school_id
	  end

	  create_table :students do |t|
	    t.integer :user_id
	    t.integer :school_id
	    t.boolean :verified
	  end

	  create_table :followers do |t|
	    t.integer :user_id
	    t.integer :school_id
	  end

	  create_table :join_styles do |t|
	    t.integer :user_id
	    t.integer :school_id
	    t.integer :style_id
	  end
  end
end

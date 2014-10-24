# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141024201356) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "followers", force: true do |t|
    t.integer "user_id"
    t.integer "school_id"
  end

  create_table "logos", force: true do |t|
    t.text    "title"
    t.text    "image"
    t.integer "school_id"
  end

  create_table "memberships", force: true do |t|
    t.integer "user_id"
    t.integer "school_id"
    t.boolean "verified"
  end

  create_table "photos", force: true do |t|
    t.text    "title"
    t.text    "location"
    t.text    "image"
    t.integer "user_id"
    t.integer "school_id"
  end

  create_table "schools", force: true do |t|
    t.text     "name"
    t.text     "description"
    t.text     "lineage"
    t.text     "country_of_origin"
    t.text     "phone_number"
    t.text     "email"
    t.text     "site_link"
    t.text     "facebook_link"
    t.text     "twitter_link"
    t.integer  "user_id"
    t.boolean  "verified"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "address"
    t.text     "city"
    t.text     "state"
    t.integer  "zipcode"
  end

  create_table "styles", force: true do |t|
    t.text "name"
  end

  create_table "user_school_styles", force: true do |t|
    t.integer "user_id"
    t.integer "school_id"
    t.integer "style_id"
  end

  create_table "users", force: true do |t|
    t.text     "first_name"
    t.text     "last_name"
    t.text     "email"
    t.text     "password_digest"
    t.text     "style"
    t.text     "technique_of_choice"
    t.text     "location"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

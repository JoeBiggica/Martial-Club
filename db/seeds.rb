# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.delete_all
School.delete_all
Style.delete_all
Membership.delete_all
Follower.delete_all
UserSchoolStyle.delete_all
Logo.delete_all
Photo.delete_all

User.create(first_name: 'Joe', email: 'joe.biggica@gmail.com', style: 'Hung Ga Kung Fu', password: 'joe')
User.create(first_name: 'Tim', email: 'tim@gmail.com', style: 'MMA', password: 'tim')
User.create(first_name: 'Conor', email: 'conor@gmail.com', style: 'MMA', password: 'conor')
User.create(first_name: 'Adrian', email: 'adrian@gmail.com', style: 'Krav Maga', password: 'adrian')
User.create(first_name: 'Jeff', email: 'jeff@gmail.com', style: 'Karate', password: 'jeff')

School.create(name: "Fong's Hung Ga Kung Fu", address: "95 Lincoln Ave", city: "Staten Island", state: "NY")
School.create(name: "Tiger Schulmann's Mixed Martial Arts", address: "2nd Ave", city: "New York", state: "NY")
School.create(name: "Dragon Kim's Karate", address: "933 Richmond Ave", city: "Staten Island", state: "NY")
School.create(name: "Krav Maga Federation", address: "124 W 25th St", city: "New York", state: "NY")
School.create(name: "Urban Martial Arts")
School.create(name: "Vitor Shaolin's Brazilian Jiu Jitsu NYC")

Style.create(name: 'Hung Ga Kung Fu')
Style.create(name: 'Krav Maga')
Style.create(name: 'Karate')
Style.create(name: 'MMA')
Style.create(name: 'Tae Kwon Do')
Style.create(name: 'Brazilian Jiu Jitsu')

Membership.create(user_id: 1, school_id: 1)
Membership.create(user_id: 2, school_id: 2)
Membership.create(user_id: 3, school_id: 2)
Membership.create(user_id: 4, school_id: 4)
Membership.create(user_id: 5, school_id: 3)

Follower.create(user_id: 1, school_id: 1)
Follower.create(user_id: 1, school_id: 2)
Follower.create(user_id: 1, school_id: 3)
Follower.create(user_id: 3, school_id: 1)
Follower.create(user_id: 1, school_id: 1)

UserSchoolStyle.create(user_id: 1, style_id: 1)
UserSchoolStyle.create(user_id: 2, style_id: 2)
UserSchoolStyle.create(user_id: 3, style_id: 2)
UserSchoolStyle.create(user_id: 4, style_id: 4)
UserSchoolStyle.create(user_id: 5, style_id: 3)

UserSchoolStyle.create(school_id: 1, style_id: 1)
UserSchoolStyle.create(school_id: 2, style_id: 4)
UserSchoolStyle.create(school_id: 3, style_id: 3)
UserSchoolStyle.create(school_id: 4, style_id: 1)
UserSchoolStyle.create(school_id: 5, style_id: 6)









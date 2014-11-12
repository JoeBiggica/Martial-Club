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

User.create(first_name: 'Joe', email: 'joe.biggica@gmail.com', style: 'Hung Ga Kung Fu', password: 'joe', profile_url: "http://fc09.deviantart.net/fs71/f/2011/148/5/d/5d62446baab75b8a9898af496c480103-d3hfie9.jpg")
User.create(first_name: 'Tim', email: 'tim@gmail.com', style: 'MMA', password: 'tim', profile_url: "http://fc09.deviantart.net/fs71/f/2011/148/5/d/5d62446baab75b8a9898af496c480103-d3hfie9.jpg")
User.create(first_name: 'Conor', email: 'conor@gmail.com', style: 'MMA', password: 'conor', profile_url: "http://fc09.deviantart.net/fs71/f/2011/148/5/d/5d62446baab75b8a9898af496c480103-d3hfie9.jpg")
User.create(first_name: 'Adrian', email: 'adrian@gmail.com', style: 'Krav Maga', password: 'adrian', profile_url: "http://fc09.deviantart.net/fs71/f/2011/148/5/d/5d62446baab75b8a9898af496c480103-d3hfie9.jpg")
User.create(first_name: 'Jeff', email: 'jeff@gmail.com', style: 'Karate', password: 'jeff', profile_url: "http://fc09.deviantart.net/fs71/f/2011/148/5/d/5d62446baab75b8a9898af496c480103-d3hfie9.jpg")

School.create(
	logo_url: "./fist_avatar.png", 
	name: "Fong's Hung Ga Kung Fu", 
	address: "95 Lincoln Ave", 
	city: "Staten Island", 
	state: "NY", 
	email: 'sifu.fong@fonghungga.com', 
	phone_number: "(718)-688-2478", 
	site_link: "http://www.fonghungga.com/",
	facebook_link: "https://www.facebook.com/groups/353646963689/",
	description: "Fong’s Hung Ga Kung Fu Association based out of New York City is dedicated to teach and present only the purest, most traditional Chinese Hung Ga Kung Fu in the United States. We offer classes for kids, teens and adults, from beginner to advanced levels.

	What is Hung Ga Kung Fu?

	Hung Ga is one of the most popular kung-fu systems to originate from Kwang Tung (Canton), China. It is one of the five family systems passed down from the teachings of the Siu Lum Monk, Gee Shim, who taught five disciples surnamed Hung, Choy, Lay, Lau, and Mok. Hung- Ga, named after Hung Hei Guen, is a powerful style which encompasses the hard, long range offense of the Fu Ying (tiger form) and the soft, short range fluid defense of the Hok Ying (crane form), the evasiveness of the Lung (dragon), the precision of the Sae (snake), the swiftness of the Pao, (leopard) and the application of the Ng Hang Kuen (five element fist)."
)
School.create(
	logo_url: "http://www.tintonfalls.com/images/Community%20Day/2010/TigerSchulmanLogo2.JPG", 
	name: "Tiger Schulmann's Mixed Martial Arts (New Dorp)", 
	address: "2nd Ave", 
	city: "New York", 
	state: "NY", 
	email: 'tigerschulmann@gmail.com', 
	phone_number: "(718)-456-4666",
	site_link: "http://tsk.com/locations/new-york-locations/staten-island/new-dorp",
	facebook_link: "https://www.facebook.com/TSMMASTATENISLAND", 
	description: "From Kickboxing to Karate, Tiger Schulmann New Dorp Fitness center has it all. Get in peak physical and mental shape with our high fat and calorie burning workouts designed to build strength, speed and agility. With classes in Karate, Kickboxing, Muay Thai, Jiu Jitsu and mixed Martial Arts, we offer training for all skill sets and ages — whether you’re just starting out or training for the next professional competition. Build confidence in your body and mind as you enter the world of self defense. Check out our kids Karate classes, as well, and watch as your child learns life-long skills such as focus and self-discipline. Conveniently located near the corner of Hylan Blvd. and New Dorp Lane, stop into Tiger Schulmann New Dorp Fitness Center today and begin your Martial Arts journey."
)
School.create(
	logo_url: "https://scontent-a-lax.xx.fbcdn.net/hphotos-prn2/v/t1.0-9/529133_440178995995520_603410312_n.jpg?oh=240ed19b706f8e15c21f952757cd434e&oe=54D742B9", 
	name: "Dragon Kim's Karate", 
	address: "933 Richmond Ave", 
	city: "Staten Island", 
	state: "NY", 
	email: 'dragonkim@gmail.com', 
	phone_number: "(718)-456-7899",
	site_link: "http://www.dkkarateusa.com",
	facebook_link: "https://www.facebook.com/dragonkimskarateusa/timeline", 
	description: "Dragon Kim’s Karate USA, of Staten Island, N.Y., was founded by Grand Master Jhong Uhk Kim, a 3rd generation Grand Master. Dragon Kim’s offers a variety of classes including Little Dragons for children aged 3 to 5 years and an adult open program.

	Grand Master Kim is one of a few internationally certified 9th degree Black Belts in the world. He, and the other masters of Dragon Kim’s Karate have been featured on several programs including CNN, ABC, Fox, ESPN and more.

	Whether you’re looking to sign your child up for life changing training, or to get in shape, Dragon Kim’s is the place to do it."
)
School.create(
	logo_url: "http://kravmagainc.com/images/logo.png", 
	name: "Krav Maga Federation", 
	address: "124 W 25th St", 
	city: "New York", 
	state: "NY",
	email: "kravmagainfo@yahoo.com",
	phone_number: "(212)-781-1124",
	site_link: "http://kravmagainc.com/" ,
	facebook_link: "https://www.facebook.com/pages/Krav-Maga-Federation/109417327987",
	description: "KRAV MAGA is the official self defense system of Israel.
	The art is designed so that it may be used by everyone regardless of size strength or fitness, and is specifically for use on the street- a place where no rules exist.
	Principles of Krav Maga include never using strength vs. strength, always striking vulnerable targets, and that for every defense there must also be an immidiate offense.

	Practitioners learn to defend themselves against attackers both unarmed and armed (including defenses against sticks, knives and guns) as well as against multiple attackers.
	There are no competitions in Krav Maga, the style is for self defense only."
)
School.create(
	logo_url: "http://s3-media1.ak.yelpcdn.com/bphoto/dquCcIzcF997Ez77GKFEVg/l.jpg", 
	name: "NY Martial Arts Academy", 
	address: "253-26 Northern Blvd", 
	city: "New York", 
	state: "NY", 
	email: 'nymartialartsg@gmail.com', 
	phone_number: "(123)-456-7890",
	site_link: "http://www.nymaa.com/",
	facebook_link: "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.nymaa.com%2Fcontact-us.html%23.VGOFTMhBiSI.facebook&p[title]=NY%20Martial%20Arts%20Academy%20Contact%20Information&display=popup",
	description: "In 1985 NY Martial Arts Academy was the first school in the tri-state area to teach Jeet Kune Do. Since that time there have been over 4,500 students trained at our academy. Through the years we have maintained our high standards through small group lessons, personalized attention and constant interaction with our students."
)
School.create(
	logo_url: "http://andersonsmartialarts.com/wp-content/themes/amaa2012/images/logo.jpg", 
	name: "Anderson's Martial Arts Academy", 
	address: "394 Broadway", 
	city: "New York", 
	state: "NY", 
	email: 'amaa@gmail.com', 
	phone_number: "(123)-456-7890", 
	site_link: "http://andersonsmartialarts.com/",
	facebook_link: "https://www.facebook.com/AMAANYC",
	description: "Anderson’s Martial Arts Academy (AMAA) offers one of the most highly respected, quality mixed martial arts programs in the nation. The choice to join AMAA is a choice to join a distinguished, time-honored mixed martial arts academy that is rich in tradition, lineage and reputation.
	Founded by Sifu Dan Anderson in 1996, Anderson’s Martial Arts Academy continues to grow in its size and stature. However, it remains committed to the task of providing students with the most practical and effective self-defense skills, rooted in the principles of martial arts.
	We are the ONLY Manhattan based facility that is certified to teach Jeet Kune Do (JKD) directly under Bruce Lee’s heritage, as well as under Guro Dan Inosanto in both Filipino Martial Arts and Jeet Kune Do (JKD). Beginning sixteen years ago, AMAA teaches Brazilian Jiu-Jitsu, Grappling, and was one of the first schools in New York City to teach Muay Thai. We have also had the privilege of teaching some of New York’s finest men and women from the NYPD, FBI, FDNY and U.S. military. Above all, we pride ourselves on the quality of our curriculum, the diversity of our students, as well as the experience and lineage of our instructors."
)
School.create(
	logo_url: "http://www.urbandojo.com/wp-content/uploads/2012/05/UMAhorizontal.jpg-525x137.jpg", 
	name: "Urban Martial Arts", 
	address: "965 Coney Island Ave", 
	city: "New York", 
	state: "NY",
	email: 'amaa@gmail.com', 
	phone_number: "(123)-456-7890", 
	site_link: "http://www.urbandojo.com/",
	facebook_link: "https://www.facebook.com/urbanmartialarts",
	description: "Urban Martial Arts is a Brooklyn martial arts studio in Ditmas Park that offers a transported martial arts after-school program, a karate summer camp, and martial arts classes for kids and teens as well as fitness kickboxing classes for adults. Urban Martial Arts strives to enrich its students’ lives not only physically but also mentally.

	All participants in the youth martial arts programs learn character building techniques as well as karate. If a child cannot master key elements of character development, then he cannot move forward with the physical training."
)
School.create(
	logo_url: "https://lh5.googleusercontent.com/-E0nQ6xRpL-I/VFvS7_lyxAI/AAAAAAAAA4o/-pKD5OXO1dg/w2042-h2044/BMAA_Blue_Logo.png", 
	name: "Bronx Martial Arts Academy", 
	address: "1051 Allerton Ave", 
	city: "New York", 
	state: "NY", 
	email: 'amaa@gmail.com', 
	phone_number: "(123)-456-7890",
	site_link: "http://bronxmartialarts.com/",
	facebook_link: "https://www.facebook.com/bmaa.r.gracie?v=wall", 
	description: "What will you find at Bronx Martial Arts Academy?
	At BMAA, you’ll find world class instruction. Interested in learning Brazilian Jiu Jitsu? We offer classes taught by Renzo Gracie and John Danaher Black and Brown belts. Interested in learning Shotokan Karate? We offer classes taught by national and international champions.
	At BMAA, you’ll also find a friendly, safe training environment. Students develop as martial artists, gain self confidence, and improve their physical fitness in a family-type atmosphere. Moreover, our facility is brand new, furnished with top-of-the-line quality mats (Zebra® mats), and equipped with men’s and women’s locker rooms complete with showers. From our friendly, team atmosphere to our first-class facility, we have everything you need for a great training experience."
)
School.create(
	logo_url: "https://lh5.googleusercontent.com/-lmp9zXZ7qro/UFI1nXxhIpI/AAAAAAAAAtY/ECEEWIb0Nfs/w281-h252-p-o/NYC+Shotokan+Karate+Dojo.png", 
	name: "NYC Shotokan Karate Dojo", 
	address: "55 Lexington Ave", 
	city: "New York", 
	state: "NY", 
	email: 'amaa@gmail.com', 
	phone_number: "(123)-456-7890",
	site_link: "http://nyckarate.com/",
	facebook_link: "", 
	description: "NYC Shotokan Karate Dojo was founded by sensei George Goshadze, who joined Baruch College in 2001 as an MBA student and has since been teaching Karate Course 1310 as part of the college’s physical education program.

	Sensei Goshadze (Godan, SKIF) is a top level Shotokan Karate instructor with over 20 years teaching experience. He was a founder and chief instructor of one of the most successful dojos of country of Georgia and has produced numerous national champions.

	Beginning in 2012, dojo opened its doors to the people outside of the college. Our mission is to establish a real, powerful karate school in Manhattan based not only on the best traditions and true spirit of karate, but also on its genuine understanding and practical application in the modern world.

	Baruch College generously provides us with state of the art facilities, and we are perfectly equipped not only for our daily practices but also for events of any scale. On top of unlimited karate classes, those with advanced membership can have full access to the college’s fitness center (including gym and pool)."
)
School.create(
	logo_url: "http://wankamleung.com/wp-content/themes/practical-wing-chun-headquaters/images/pwc-international-logo_256.png", 
	name: "Practical Wing Chun Kung Fu", 
	address: "132-18 33rd Ave", 
	city: "New York", 
	state: "NY",
	email: 'amaa@gmail.com', 
	phone_number: "(123)-456-7890",
	site_link: "http://www.newyorkwingchun.com/",
	facebook_link: "",
	description: "Grandmaster WAN Kam Leung was born in 1945 in Po On village in the Guangdong Province of Southern China. His interest in Martial Arts began at an early age and by his teens he experienced various traditional styles of Kung Fu in China. In 1959, Grandmaster Wan emigrated from China to Hong Kong. His older brother introduced him to a Kung Fu style called Wing Chun. Grandmaster Wan’s first teacher was YIP Man’s first disciple, LEUNG Sheung. In 1962, when the Wing Chun legend, late Grandmaster WONG Shun Leung, opened his own school, the young Grandmaster Wan signed up on the first day and quickly become a close friend of Wong Shun Leung. In 1969, Grandmaster Wan became an official Wing Chun instructor in his own right and began active teaching. "
)
School.create(
	logo_url: "./fist_avatar.png", 
	name: "Yip Pui Wing Chun Martial Arts", 
	address: "440 Lafayette St", 
	city: "New York", 
	state: "NY", 
	email: 'http://www.yipwingchun.com/index.html', 
	phone_number: "(123)-456-7890",
	site_link: "http://www.newyorkwingchun.com/",
	facebook_link: "",
	description: "Founder, Sifu Yip Pui (1950 - 2014)
	The school will remain open and classes and testing will continue to be administered by Yip Pui's senior students.
	Like so many Kung Fu disciplines, Wing Chun is a very old fighting system, shrouded in secrecy and passed on to only a select few. It was virtually unknown in the west until the 1960s, when Yip Man - the legendary teacher of Bruce Lee - revealed it to the public. Grandmaster Yip Man - who has been deemed one of the most influential Martial Artists of the 20th century by Inside Kung Fu magazine - had other renowned students, including his eldest son Yip Chun."
)
School.create(
	logo_url: "https://scontent-b-lax.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10609506_853999707958691_183221754220170588_n.jpg?oh=6226984b184cfc3117f235d0507bf273&oe=54E2841F", 
	name: "Choy Lee Fut Kung Fu Sydney", 
	address: "Bay Ridge Ave", 
	city: "Brooklyn",
	state: "NY", 
	email: 'choyleifut@gmail.com', 
	phone_number: "(123)-456-7890",
	site_link: "http://www.choyleefutusa.com/welcome.html",
	facebook_link: "",
	description: "Wong Jan Yum (Huang Zhen Qin) is the head instructor for the Choy Lee Fut Hung Sing Gwoon in New York City. He is a direct 6th generation descendant of the Sam Woi (Xin Hui) Choy Lee Fut Association.
	Wong Sifu has been training Choy Lee Fut for the past 20 years and taught professionally, full time in the Choy Lee Fut ancestral training hall in Guangdong, China. His experience includes teaching children traditional Chinese gong fu, fighters looking to compete in the ring, and senior citizens seeking to improve their health. His students come from all over the world including Asia, Europe, Australia, and USA. He is one of the few teachers able to pass on the full teachings of Choy Lee Fut kung fu here in the Unted States."
)
School.create(
	logo_url: "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/74256_166395113391123_7404305_n.jpg?oh=5e4d935d22ddacf3ad2179e2cedff93b&oe=54DFAD5F&__gda__=1423713198_b4e4c33dd5f717dad2f5b8669ebf87b5", 
	name: "New York Hung Ga", 
	address: "151 W 26th St", 
	city: "New York", 
	state: "NY", 
	email: 'amma@gmail.com', 
	phone_number: "(123)-456-7890",
	site_link: "",
	facebook_link: "https://www.facebook.com/NewYorkHungGa", 
	description: "New York Hung Ga is a kung fu martial arts school located in New York City. The Academy offers training in Hung Ga (a/k/a Hung Gar) Kung Fu, Shaolin Five Animals Kung Fu, San Da Chinese Kickboxing, and Competition Training. Hours listed are for the current class schedule."
)

Style.create(name: 'Hung Ga Kung Fu')
Style.create(name: 'Krav Maga')
Style.create(name: 'Karate')
Style.create(name: 'MMA')
Style.create(name: 'Tae Kwon Do')
Style.create(name: 'Choy Lee Fut Kung Fu')
Style.create(name: 'Wing Chun Kung Fu')
Style.create(name: 'Shotokan Karate')

UserSchoolStyle.create(school_id: 1, style_id: 1)
UserSchoolStyle.create(school_id: 2, style_id: 4)
UserSchoolStyle.create(school_id: 3, style_id: 5)
UserSchoolStyle.create(school_id: 4, style_id: 2)
UserSchoolStyle.create(school_id: 5, style_id: 4)
UserSchoolStyle.create(school_id: 6, style_id: 4)
UserSchoolStyle.create(school_id: 7, style_id: 4)
UserSchoolStyle.create(school_id: 8, style_id: 4)
UserSchoolStyle.create(school_id: 9, style_id: 8)
UserSchoolStyle.create(school_id: 10, style_id: 7)
UserSchoolStyle.create(school_id: 11, style_id: 7)
UserSchoolStyle.create(school_id: 12, style_id: 6)
UserSchoolStyle.create(school_id: 13, style_id: 1)

UserSchoolStyle.create(user_id: 1, style_id: 1)
UserSchoolStyle.create(user_id: 2, style_id: 2)
UserSchoolStyle.create(user_id: 3, style_id: 2)
UserSchoolStyle.create(user_id: 4, style_id: 4)
UserSchoolStyle.create(user_id: 5, style_id: 3)

Membership.create(user_id: 1, school_id: 1)
Membership.create(user_id: 2, school_id: 2)
Membership.create(user_id: 3, school_id: 2)
Membership.create(user_id: 4, school_id: 4)
Membership.create(user_id: 5, school_id: 3)

Follower.create(user_id: 1, school_id: 1)
Follower.create(user_id: 2, school_id: 2)
Follower.create(user_id: 1, school_id: 3)
Follower.create(user_id: 3, school_id: 1)
Follower.create(user_id: 1, school_id: 1)












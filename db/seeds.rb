# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: "admin", password: "password")
show1 = Show.create(title: "Nature", description: "In this incredible journey through the natural world, we explore remote jungles, white sand beaches and snow capped mountains", photoUrl: "https://luhu-seeds.s3.amazonaws.com/nature_waves.jpg", tall_photoUrl:"https://luhu-seeds.s3.amazonaws.com/wave_tall.png", square_photoUrl:"https://luhu-seeds.s3.amazonaws.com/nature_square.jpg" )
show2 = Show.create(title: "Humans", description: "Staring Individuals from all walks of life, Humans tells the tale of existence and exmines the small slices of life that make us human", photoUrl: "https://luhu-seeds.s3.amazonaws.com/humans_running.jpg", tall_photoUrl:"https://luhu-seeds.s3.amazonaws.com/people_tall.png", square_photoUrl:"https://luhu-seeds.s3.amazonaws.com/people_square.jpg")
show3 = Show.create(title: "Cities", description: "The urban landscapes of the modern world are vast and varried, join Luhu in exploring the vast metropolisis that we call home.", photoUrl: "https://luhu-seeds.s3.amazonaws.com/cities_rome.jpg", tall_photoUrl: "https://luhu-seeds.s3.amazonaws.com/cities_tall.png", square_photoUrl:"https://luhu-seeds.s3.amazonaws.com/cities_square.jpg" )
show4 = Show.create(title: "Cats", description: "Cats chronicles the incredible world of cats, a species that is both domesticated house companion and ferocious hunter.  ", photoUrl: "https://luhu-seeds.s3.amazonaws.com/cat_sun.jpg", tall_photoUrl: "https://luhu-seeds.s3.amazonaws.com/cat_tall.png", square_photoUrl:"https://luhu-seeds.s3.amazonaws.com/cat_square.jpg" )
show5 = Show.create(title: "Top Cars", description: "The worlds best car show is back and better than ever with wacky antics and entertaining adventures", photoUrl: "https://luhu-seeds.s3.amazonaws.com/car1.jpg", tall_photoUrl:"https://luhu-seeds.s3.amazonaws.com/car_tall.jpg", square_photoUrl:"https://luhu-seeds.s3.amazonaws.com/car_square.jpg")
episode1 = Episode.create(show_id: 1, title: "Waves", description: "Waves crash on a beach", episode_number: 1, photoUrl: "https://luhu-seeds.s3.amazonaws.com/nature_waves.jpg", videoUrl:"https://luhu-seeds.s3.amazonaws.com/nature_waves.webm")
episode2 = Episode.create(show_id: 1, title: "Milky Way", description: "A time lapse of the milky way", episode_number: 2, photoUrl:"https://luhu-seeds.s3.amazonaws.com/nature_milkyway.jpg", videoUrl: "https://luhu-seeds.s3.amazonaws.com/nature_milkyway.webm" )
episode3 = Episode.create(show_id: 1, title: "Forest", description: "An indepth look at the top of a forest", episode_number: 3, photoUrl: "https://luhu-seeds.s3.amazonaws.com/nature_forest.jpg", videoUrl: "https://luhu-seeds.s3.amazonaws.com/nature_forest.webm" )
episode4 = Episode.create(show_id: 1, title: "Mountain", description: "Wild flowers on Mt Ranier", episode_number: 4, photoUrl: "https://luhu-seeds.s3.amazonaws.com/nature_ranier.jpg", videoUrl:"https://luhu-seeds.s3.amazonaws.com/nature_ranier.webm" )
episode5 = Episode.create(show_id: 2, title: "Running", description: "A child runs through flags", episode_number: 1, photoUrl:"https://luhu-seeds.s3.amazonaws.com/humans_running.jpg", videoUrl:"https://luhu-seeds.s3.amazonaws.com/humans_running.webm")
episode6 = Episode.create(show_id: 2, title: "Walking", description: "Humans walk across cross walk", episode_number: 2, photoUrl:"https://luhu-seeds.s3.amazonaws.com/humans_walking.jpg", videoUrl:"https://luhu-seeds.s3.amazonaws.com/humans_walking.webm")
episode7 = Episode.create(show_id: 2, title: "Eye", description: "Close up of a human eye", episode_number: 3, photoUrl:"https://luhu-seeds.s3.amazonaws.com/human_eye.jpg", videoUrl: "https://luhu-seeds.s3.amazonaws.com/human_eye.webm" )
episode8 = Episode.create(show_id: 3, title: "Bangkok", description: "Slow pan of Bangkok skyline", episode_number: 1, photoUrl:"https://luhu-seeds.s3.amazonaws.com/cities_bangkok.jpg", videoUrl:"https://luhu-seeds.s3.amazonaws.com/cities_bangkok.webm"  )
episode9 = Episode.create(show_id: 3, title: "Rome", description: "Rome in the evening", episode_number: 2, photoUrl: "https://luhu-seeds.s3.amazonaws.com/cities_rome.jpg", videoUrl:"https://luhu-seeds.s3.amazonaws.com/cities_rome.webm" )
episode10 = Episode.create(show_id: 3, title: "New York", description: "Grand central terminal", episode_number: 3, photoUrl: "https://luhu-seeds.s3.amazonaws.com/cities_grandcentral.jpg", videoUrl:"https://luhu-seeds.s3.amazonaws.com/cities_grandcentral.webm")
episode11 = Episode.create(show_id: 4, title: "Cat in the Sun", description: "Cat Enjoys some sun", episode_number: 1, photoUrl: "https://luhu-seeds.s3.amazonaws.com/cat_sun.jpg", videoUrl:"https://luhu-seeds.s3.amazonaws.com/cat_sun.mp4")
episode12 = Episode.create(show_id: 4, title: "Danger Cat", description: "Cat hisses", episode_number: 2, photoUrl: "https://luhu-seeds.s3.amazonaws.com/cat_hissing.jpg", videoUrl:"https://luhu-seeds.s3.amazonaws.com/cat_hissing.webm")
episode13 = Episode.create(show_id: 5, title: "The long road home", description: "Car drives through iceland", episode_number: 1, photoUrl: "https://luhu-seeds.s3.amazonaws.com/car1.jpg", videoUrl: "https://luhu-seeds.s3.amazonaws.com/car1.mp4")



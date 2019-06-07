# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'




User.create(username: "admin", password: "password")
show1 = Show.create(title: "Nature", description: "In this incredible journey through the natural world, we explore remote jungles, white sand beaches and snow capped mountains")
file10 = open("https://luhu-seeds.s3.amazonaws.com/nature_waves.jpg")
show1.photo.attach(io: file10, filename: 'nature_waves.jpg')
file11 = open("https://luhu-seeds.s3.amazonaws.com/wave_tall.png")
show1.photo_tall.attach(io: file11, filename: 'wave_tall.jpg')
file12 = open("https://luhu-seeds.s3.amazonaws.com/nature_square.jpg")
show1.photo_square.attach(io: file12, filename: 'nature_square.jpg')

show2 = Show.create(title: "Humans", description: "Staring Individuals from all walks of life, Humans tells the tale of existence and exmines the small slices of life that make us human")
file4 = open("https://luhu-seeds.s3.amazonaws.com/humans_running.jpg")
show2.photo.attach(io: file4, filename: 'humans_running.jpg')
file6 = open("https://luhu-seeds.s3.amazonaws.com/people_tall.png")
show2.tall_photo.attach(io: file6, filename: 'people_tall.png')
file5 = open("https://luhu-seeds.s3.amazonaws.com/people_square.jpg")
show2.square_photo.attach(io: file5, filename: 'humans_square.jpg')

show3 = Show.create(title: "Cities", description: "The urban landscapes of the modern world are vast and varried, join Luhu in exploring the vast metropolisis that we call home.")
file7 = open("https://luhu-seeds.s3.amazonaws.com/cities_rome.jpg")
show3.photo.attach(io: file7, filename: 'cities_rome.jpg')
file8 = open("https://luhu-seeds.s3.amazonaws.com/cities_tall.png")
show3.tall_photo.attach(io: file8, filename: 'cities_tall.png')
file9 = open("https://luhu-seeds.s3.amazonaws.com/cities_square.jpg")
show3.square_photo.attach(io: file9, filename: 'cities_square.png')

show4 = Show.create(title: "Cats", description: "Cats chronicles the incredible world of cats, a species that is both domesticated house companion and ferocious hunter.  ")
file = open("https://luhu-seeds.s3.amazonaws.com/cat_sun.jpg")
show4.photo.attach(io: file, filename: 'cat_sun.jpg')
file2 = open("https://luhu-seeds.s3.amazonaws.com/car_tall.jpg")
show4.tall_photo.attach(io: file2, filename: 'tall_cat.jpg')
file3 = open("https://luhu-seeds.s3.amazonaws.com/cat_square.jpg")
show4.square_photo.attach(io: file3, filename: 'square_cat.jpg')

show5 = Show.create(title: "Top Cars", description: "The worlds best car show is back and better than ever with wacky antics and entertaining adventures")
file13 = open("https://luhu-seeds.s3.amazonaws.com/car1.jpg")
show5.photo.attach(io: file13, filename: 'car1.jpg')
file14 = open("https://luhu-seeds.s3.amazonaws.com/car_tall.jpg")
show5.tall_photo.attach(io: file14, filename: 'car_tall.jpg')
file15 = open("https://luhu-seeds.s3.amazonaws.com/car_square.jpg")
show5.square_photo.attach(io: file15, filename: 'car_square.jpg')


episode1 = Episode.create(show_id: 1, title: "Waves", description: "Waves crash on a beach", episode_number: 1)
file16 = open("https://luhu-seeds.s3.amazonaws.com/nature_waves.jpg")
episode1.photo.attach(io: file16, filename: 'nature_waves.jpg')
file17 = open("https://luhu-seeds.s3.amazonaws.com/nature_waves.webm")
episode1.video.attach(io: file17, filename: 'nature_waves.webm')

episode2 = Episode.create(show_id: 1, title: "Milky Way", description: "A time lapse of the milky way", episode_number: 2)
file18 = open("https://luhu-seeds.s3.amazonaws.com/nature_milkyway.jpg")
episode2.photo.attach(io: file18, filename: 'nature_milkyway.jpg')
file19 = open("https://luhu-seeds.s3.amazonaws.com/nature_milkyway.webm")
episode2.video.attach(io: file19, filename: 'nature_milkyway.webm')

episode3 = Episode.create(show_id: 1, title: "Forest", description: "An indepth look at the top of a forest", episode_number: 3)
file20 = open("https://luhu-seeds.s3.amazonaws.com/nature_forest.jpg")
episode3.photo.attach(io: file20, filename: 'nature_forest.jpg')
file21 = open("https://luhu-seeds.s3.amazonaws.com/nature_forest.webm")
episode3.video.attach(io: file21, filename: 'nature_forest.webm')

episode4 = Episode.create(show_id: 1, title: "Mountain", description: "Wild flowers on Mt Ranier", episode_number: 4)
file22 = open("https://luhu-seeds.s3.amazonaws.com/nature_ranier.jpg")
episode4.photo.attach(io: file22, filename: 'nature_ranier.jpg')
file23 = open("https://luhu-seeds.s3.amazonaws.com/nature_ranier.webm")
episode4.video.attach(io: file23, filename: 'nature_ranier.webm')

episode5 = Episode.create(show_id: 2, title: "Running", description: "A child runs through flags", episode_number: 1)
file24 = open("https://luhu-seeds.s3.amazonaws.com/humans_running.jpg")
episode5.photo.attach(io: file24, filename: 'humans_running.jpg')
file25 = open("https://luhu-seeds.s3.amazonaws.com/humans_running.webm")
episode5.video.attach(io: file25, filename: 'humans_running.webm')

episode6 = Episode.create(show_id: 2, title: "Walking", description: "Humans walk across cross walk", episode_number: 2)
file26 = open("https://luhu-seeds.s3.amazonaws.com/humans_walking.jpg")
episode6.photo.attach(io: file26, filename: 'humans_walking.jpg')
file27 = open("https://luhu-seeds.s3.amazonaws.com/humans_walking.webm")
episode6.video.attach(io: file27, filename: 'humans_walking.webm')

episode7 = Episode.create(show_id: 2, title: "Eye", description: "Close up of a human eye", episode_number: 3)
file28 = open("https://luhu-seeds.s3.amazonaws.com/human_eye.jpg")
episode7.photo.attach(io: file28, filename: 'human_eye.jpg')
file29 = open("https://luhu-seeds.s3.amazonaws.com/human_eye.webm")
episode7.video.attach(io: file29, filename: 'human_eye.webm')

episode8 = Episode.create(show_id: 3, title: "Bangkok", description: "Slow pan of Bangkok skyline", episode_number: 1)
file30 = open("https://luhu-seeds.s3.amazonaws.com/cities_bangkok.jpg")
episode8.photo.attach(io: file30, filename: 'cities_bangkok.jpg')
file31 = open("https://luhu-seeds.s3.amazonaws.com/cities_bangkok.webm")
episode8.video.attach(io: file31, filename: 'cities_bangkok.webm')

episode9 = Episode.create(show_id: 3, title: "Rome", description: "Rome in the evening", episode_number: 2)
file32 = open("https://luhu-seeds.s3.amazonaws.com/cities_rome.jpg")
episode9.photo.attach(io: file32, filename: 'cities_rome.jpg')
file33 = open("https://luhu-seeds.s3.amazonaws.com/cities_rome.webm")
episode9.video.attach(io: file33, filename: 'cities_rome.webm')

episode10 = Episode.create(show_id: 3, title: "New York", description: "Grand central terminal", episode_number: 3)
file34 = open("https://luhu-seeds.s3.amazonaws.com/cities_grandcentral.jpg")
episode10.photo.attach(io: file34, filename: 'cities_grandcentral.jpg')
file35 = open("https://luhu-seeds.s3.amazonaws.com/cities_grandcentral.webm")
episode10.video.attach(io: file35, filename: 'cities_grandcentral.webm')

episode11 = Episode.create(show_id: 4, title: "Cat in the Sun", description: "Cat Enjoys some sun", episode_number: 1)
file36 = open("https://luhu-seeds.s3.amazonaws.com/cat_sun.jpg")
episode11.photo.attach(io: file36, filename: 'cat_sun.jpg')
file37 = open("https://luhu-seeds.s3.amazonaws.com/cat_sun.mp4")
episode11.video.attach(io: file37, filename: 'cat_sun.mp4')

episode12 = Episode.create(show_id: 4, title: "Danger Cat", description: "Cat hisses", episode_number: 2)
file38 = open("https://luhu-seeds.s3.amazonaws.com/cat_hissing.jpg")
episode12.photo.attach(io: file36, filename: 'cat_hissing.jpg')
file39 = open("https://luhu-seeds.s3.amazonaws.com/cat_hissing.webm")
episode12.video.attach(io: file37, filename: 'cat_hissing.webm')

episode13 = Episode.create(show_id: 5, title: "The long road home", description: "Car drives through iceland", episode_number: 1)
file40 = open("https://luhu-seeds.s3.amazonaws.com/car1.jpg")
episode13.photo.attach(io: file36, filename: 'car1.jpg')
file41 = open("https://luhu-seeds.s3.amazonaws.com/car1.mp4")
episode13.video.attach(io: file37, filename: 'car1.mp4')


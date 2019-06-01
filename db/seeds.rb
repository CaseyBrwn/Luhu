# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create(username: "admin", password: "password")
show1 = Show.create(title: "Rick and Morty", description: "The one true morty")
show2 = Show.create(title: "The Real Frog Hunter", description: "Critics are calling it ribbiting")
show3 = Show.create(title: "CSI PreSchool", description: "We find out who really took the cookie from the cookie jar")
episode1 = Episode.create(show_id: 1, title: "Alien Television", description: "Rick and morty watch television", episode_number: 1)
episode2 = Episode.create(show_id: 1, title: "The face of danger", description: "More trouble for the duo", episode_number: 2)
episode3 = Episode.create(show_id: 1, title: "It comes a knockin", description: "Something from Ricks past comes back to haunt him", episode_number: 3)
episode4 = Episode.create(show_id: 2, title: "The bull frog of sout florida", description: "A bull frog terrorizes the backyards of miami", episode_number: 1)
episode5 = Episode.create(show_id: 2, title: "The dart frog of South America", description: "Handle with care these colorful frogs are deadly", episode_number: 2)
episode6 = Episode.create(show_id: 2, title: "Hypno Toad", description: "Dont look into its eyes!", episode_number: 3)
episode7 = Episode.create(show_id: 3, title: "Who took the ", description: "Dont look into its eyes!", episode_number: 3)
episode8 = Episode.create(show_id: 3, title: "Hypno Toad", description: "Dont look into its eyes!", episode_number: 3)
moive1 = Movie.create(title: "The Matrix", description:"Do you think thats air your breathing?")
move2 = Movie.create(title: "Gone with the wind", description:"Do you think thats wind your breathing?")
movie3 = Movie.create(title: "The God Father Part 2", description:"Was not as good as part 1")
show1.photo.attach(io: File.open("/Users/aa/Documents/Vindicators.jpg"), filename: "Vindicators.jpg")
show2.photo.attach(io: File.open("/Users/aa/Documents/frog.jpg"), filename: "frog.jpg")
show3.photo.attach(io: File.open("/Users/aa/Documents/detective.jpg"), filename: "detective.jpg")

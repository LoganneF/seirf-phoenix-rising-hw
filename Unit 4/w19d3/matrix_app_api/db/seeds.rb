# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Character.create([
	{ name: "Neo", description: "born as Thomas A. Anderson, also known as The One, an anagram for Neo" },
	{ name: "Trinity", description: "The name Morpheus is that of the god of dreams in Greek mythology, which is consistent with the character's involvement with the dreaming" },
	{ name: "Morpheus", description: "Trinity is a computer programmer and a hacker who has escaped from the Matrix" },
	{ name: "Agent Smith", description: "Smith began as an Agent, an AI program in the Matrix programmed to keep order within the system" },
])
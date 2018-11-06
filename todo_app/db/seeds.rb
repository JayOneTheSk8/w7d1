# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Todo.destroy_all

Todo.create(title: 'clean', body: 'wash dishes')
Todo.create(title: 'sweep', body: 'sweep kitchen')
Todo.create(title: 'eat', body: 'eat food')
Todo.create(title: 'breathe', body: 'inhale exhale')

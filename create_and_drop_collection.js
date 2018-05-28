use mydb
db.createCollection("myCollection")
show collections
db.myCollection2.insert({"name":"aman"})
show collections
db.myCollection.drop()
show collections
db.myCollection2.drop()
show collections
db.createCollection("myCollection3")
db.myCollection3.insert({"name":"aman"})
show collections
db.myCollection3.drop()
db.createCollection("myCollection5")
db.myCollection5.insert({"name":"aman"})
show collections
db.myCollection5.drop()
show collections
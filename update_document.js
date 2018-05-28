use school
db.students.find()
//db.students.update(
//{ "_id" : ObjectId("5b0be7d2f04a82a50d4d8c31")},
//{$set : {"LastName" : "Boucher",}}
//)
//db.students.find()

//modify multiple documents with same age

//db.students.update(
//{ "Age" : "10"},
//{$set : {"LastName" : "Now_Changed"}},
//{multi : true}
//)
db.students.find()



//save coomand is also there to insert and update the data
//db.students.save(
//{
// 	"_id" : ObjectId("5b0be873f04a82a50d4d8c33"), 
//    "studentNo" : "2", 
//    "FirstName" : "Aman", 
//    "LastName" : "Bansal", 
//    "Age" : "Changed_Age" //age is changed
//}
//)

//insert a new document
db.students.save(
{
 	"_id" : ObjectId("5b0be873f04a82a50d4d8c37"), //insert new id
    "studentNo" : "2", 
    "FirstName" : "Aman", 
    "LastName" : "Bansal", 
    "Age" : "Changed_Age"
}
)

db.students.find()
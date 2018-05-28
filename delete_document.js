use school

db.students.find()
//removing on the basis of id
//db.students.remove(
//{"_id" : ObjectId("5b0be873f04a82a50d4d8c33")}
//)

//removing only one field having same age so we write 1
//if we dont write 1, it will delete all the field havibg same ages
db.students.remove(
{
  "Age" : "Changed_Age"
  },1
)

db.students.find()

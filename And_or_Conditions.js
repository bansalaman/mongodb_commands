use school
db.students.find()
//db.students.find(
//{"FirstName":"Mark","Age":"10"}  //And operator
//)
//db.students.find(
//{
//	$or : [{"FirstName":"Mark"},{"Age":"25"}]  //or operator
//}
//)

//'And' and 'or' operator
db.students.find(
{
	"FirstName":"Mark" , $or : [{"Age":"30"},{"Age":"10`"}] 
}
)
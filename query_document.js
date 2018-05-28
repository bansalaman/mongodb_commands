use school
db.students.find().pretty()
db.students.findOne()
//db.students.find(
//	{
//	"studentNo":"2" 
//	}
//  )
db.students.find(
	{
	"Age":{ $gt : "0"} //For greater than equal to gte, less than = lt
	}
)
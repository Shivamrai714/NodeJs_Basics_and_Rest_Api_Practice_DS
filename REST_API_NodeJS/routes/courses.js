const ex= require("express");

const {route} =require("express/lib/application")

//Importing the models created 
const Course = require("../models/course")
const router= ex.Router();
//Creating the routes


// GET all data
router.get("/" , async (request , response ) =>{

//response.send("Your Routing is working good ")

try {
    const courses = await Course.find()
    response.json(courses)
    
} catch (error) {
    response.json(error)
}

});



// GET  single data

router.get("/:courseId" ,async (  resquest ,response ) => {

    const courseId= resquest.params.courseId;

    try {
     const c = await Course.findById(courseId)    
     response.json(c)

        
    } catch (error) {
        response.json(error)
    }


})


// POST : Create Post from thunder client :and save it in database

router.post("/"  , async (request,response) =>{

  //The installed module , In app.js : body-parse help to save json data in database 
    const course  =  Course.create(request.body)
    response.json(course)
})


//DELETE


router.delete("/:courseId", async (request,response) => {
    try {
        await Course.remove( { "_id": request.params.courseId } )
    response.status(200).json( 
        {message : "done" }
    )
    } catch (error) {
         response.json(error)
    }
})

//UPDATE

router.put("/courseId", async (request ,response) => {

    const courseId = req.params.courseId;
   
    try {
      const course = await Course.updateOne(
        {
            "_id":courseId
        },
        request.body
      )

      response.json(course)
        
    } catch (error) 
    {  response.json(error)
        
    }

} )




module.exports=router;

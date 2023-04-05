const fs = require("fs");


//Read the file
 
/*
fs.readFile("./abc.txt" , (error , data ) => {

    if(error){  console.log("error") ; console.log(error) }
    if(data ) {
        console.log(data.toString())
    }
}   );


console.log("\nTerminated First run  (Asynchronous method ) ")
*/



//write the file
let content = "Creating new file and adding data  "

fs.writeFile("newfile.txt", content , (err) => {
    if(err)
    {
        console.log(err); 
        console.log("error"); 
    }
    else{ console.log(" File created and data saved  ")
    }
} );



// append the file

fs.appendFile("./abc.txt" , " \n This added ", (err) => {
    if(err)
    {
        console.log("error " +  err )
    } else{
        console.log(" Appended the data in the previous file ")
    }
} )


// delete file 

// fs.unlink( "./newfile.txt" , (err) =>{
//     if(err) 
//     {
//         console.log(err);

//     }else
//     {
//         console.log("deleted")
//     }
// });
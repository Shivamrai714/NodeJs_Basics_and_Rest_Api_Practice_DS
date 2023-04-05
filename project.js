const url = require("url")
const http = require("http")   //just importing the modules.
const fs = require("fs")        //For reading the static files and then dislplay then to user using the response of http server 


http.createServer(   (request , response ) => {

    //request processing 
     const path = request.url;     //Fetching part aftet the localhost:/
     
     if(path == "/about")
     {
        console.log("About page")
        response.writeHead(200 ,  {
            "content-type":"text/html",
           } );
        
           const fileContent = fs.readFileSync("./views/about.html");    //REad the content of file and send back to the browser client , which display it to user.
           response.write(fileContent);
           response.end();
        
     }
     else if(path =="/services")
     {
        console.log("Services page ")
        response.writeHead(200 ,  {
            "content-type":"text/html",
           } );
        
           const fileContent = fs.readFileSync("./views/services.html");
           response.write(fileContent);
           response.end();
        

     }
     else if(path=="/home")
     {
        console.log("Home page")

  //response sending back to client   : In other languages framework Spring boot , we already get inbuit servers who do this task for us.

   //------------------------------
   response.writeHead(200 ,  {
    "content-type":"text/html",
   } );

   const fileContent = fs.readFileSync("./views/home.html");    //REad the content of file and send back to the browser client , which display it to user.
   response.write(fileContent);
   response.end();

   //------------------------------


     }

   


} 

 ).listen(9686);


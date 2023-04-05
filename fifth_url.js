const http = require("http");
const url = require("url");

http
    .createServer( (request , response ) =>{ 

         console.log(request.url);

         const urlObj = url.parse(request.url,true);   //true make it possible to display query in object type
         console.log(urlObj)
         console.log( "\nDisplayed Output : "+ urlObj.query.name)
     } )
     .listen(9686);
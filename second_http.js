// Make server using the http module

const http = require("http");
const server = http.createServer(  (req , response ) =>{

    //request process 

    //for writing the response
    response.writeHead( 200 , { "content-type" : "text/html" }  );
    response.write("<h1  > This is the http server instance  </h1> ");
    response.write("<h2>Good Work My dear , Keep Going on </h2>")
    response.write("<button>Click Here </button>  ");
    response.end("Ok by by ")

});

server.listen("9685");
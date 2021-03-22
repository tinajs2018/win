var http=require('http');
//creating a https  server
http.createServer(function( req,res){
    //ncluding the header or metadata of the web
    res.writeHead(200,{
        'content-Type':'text/html'
    })
    res.write(req.url)
    res.end();
}).listen(3000)
//the server that listers for the  port

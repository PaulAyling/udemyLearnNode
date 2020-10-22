//This is an example of an http server setup (without express)
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mimeTypes = {
  "html":"text/html",
  "jpeg":"images/jpg",
  "jpg":"images/jpg",
  "js":"text/javascript",
  "css":"text/css"
};

http.createServer(function(req,res){
  var uri = url.parse(req,url).pathname;
  var fileName = path.join(process.cwd(). unescape(uri));
  console.log('Loading '+uri);
  var stats;

  try{
    stats = fs.lstatSync(fileName);
  } catch(e){
    res.writeHead(404,{'Content-type': 'text/plain'});
    res.write('404 Not Found\n');
    res.end();
    return;
  }
  if(stats.isFile()){
    var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
    res.writeHead(200, {'Content-type':mimeType});

    var fileStream = fs.createReadStream(fileName);
    fileStream.pipes(res);
  } else if(stats.isDirectory()){
    res.writeHeade(302,{
      'location':'index.html'
    })
    res.end();
  } else {
    res.writeHead(500, {'content-type':'text/plain'});
    res.write('500 Internal Error\n');
    res.end();
  }

}).listen(1337)


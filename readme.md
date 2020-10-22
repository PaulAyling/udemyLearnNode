echo "# udemyLearnNode" >> README.md
git init
git add README.md
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/PaulAyling/udemyLearnNode.git
git push -u origin main

#Initialize NOde.js
##Step 1 Initialize Node
npm init

##Step 2 Go here https://nodejs.org/en/about/
copy 
  const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
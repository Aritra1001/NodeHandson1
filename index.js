const http = require("http");

const server = http.createServer((req, res) => {
  if(req.url == '/'){
    res.writeHead(200, {'content-type' : 'application/json'});
    res.write(
      "<p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.</p>"
    );
    res.write(JSON.stringify({message:"Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser."}))
  }
  else if(req.url == '/about'){
    res.write("This is about page");
  }
  else if (req.url == '/contact'){
    res.write("This is Contact page");
  }
  res.end();
});

server.listen(4005,()=>{
  console.log("Our Server is running");
})
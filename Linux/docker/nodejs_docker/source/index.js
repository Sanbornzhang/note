const http = require('http')
const app = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('hello docker')
})
app.listen(3000)
const express = require('express');  
const path = require('path');

const app = express();  

app.get('/', function (req, res) {  
   res.sendFile(path.join(__dirname, '/index.html'));
})  


const server = app.listen(8000, function () {  
   const host = server.address().address  
   const port = server.address().port  
   console.log("Example app listening at http://%s:%s", host, port)  
})  
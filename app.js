const express = require('express');
const fs = require ('fs');

const app = express();
const PORT = 3000
   
app.use('/', (req, res)=>{
    fs.readFile('../frontend/index.html', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();
    })
});

app.use('/about', (req, res)=>{
    fs.readFile('../frontend/about.html', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();
    })
});
app.use('/contact', (req, res)=>{
    fs.readFile('../frontend/contact.html', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();
    })
});
app.use('/error', (req, res)=>{
    fs.readFile('../frontend/error.html', (err, data)=>{
        res.writeHead(401, {'Content-Type': 'text/html'})
        res.write(data);
         res.end("401 error");
    })
});
app.get("*", (req, res) => {
    res.send("PAGE NOT FOUND");
});
app.listen(PORT, ()=>{
      console.log(`Server listening on PORT: ${PORT}`);
   })
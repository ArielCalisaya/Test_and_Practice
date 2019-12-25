// const colors = require("colors");
// const http = require("http");

// const runServer = function (req, res) {
//     res.writeHead(200, {
//         "Conent-type": "text/html"
//     });
//     res.write('<h1 style="text-align:center">message modified</h1>');
//     res.end();
// };
// const server = http.createServer(runServer);

// server.listen(3000, () => {
//     console.log("server on port: 3000".green);
//     console.log("Let's see the changes and test The future".rainbow);
// });


const colors = require('colors');
const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('<h1 style="text-align:center">Hello on the Backend</h1>');
} )


app.listen(3000, () => {
    console.log("server on port: 3000".green);
    console.log("Let's see the changes and test The future".rainbow);
})


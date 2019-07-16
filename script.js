let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'})); // Body parser use JSON data


app.post('/postmandata', function(req, res) {

    let outputFilename = './responseData.json'; // path of the file to output

    fs.writeFileSync(outputFilename, JSON.stringify(JSON.parse(req.body.payload), null, 4)); // write to the file system

    res.send('Saved to ' + outputFilename);

});

let port = 3000;
app.listen(port);
console.log('Express started on port %d ...', port);
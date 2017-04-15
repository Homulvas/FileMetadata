var express = require('express')
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
var path = require("path");

var app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/getSize', upload.single('file'), function (req, res, next) {
    var response = { size: req.file.size }
    res.json(response);
})

var port = process.env.PORT || 8080
app.listen(port, function () {
    console.log('Server listening on port ' + port + '!')
})
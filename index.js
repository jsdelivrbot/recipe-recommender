var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./server/router');


//DB setup
mongoose.connect('mongodb://test:test@ds149431.mlab.com:49431/alex-auth');

//app setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));

app.use(express.static(__dirname + '/dist'));
//include routes
router(app);

//default route
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});


//server setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server is listening on port ' + port);
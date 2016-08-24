var express = require('express');
var app = express();


// Require routes.
var auth = require('./routes/auth.js');
var user = require('./routes/user.js');
var userGroup = require('./routes/userGroup.js');
var judge = require('./routes/judge.js');
var problem = require('./routes/problem.js');
var problemGroup = require('./routes/problemGroup.js');
var challenge = require('./routes/challenge.js');

// Require helpers.
var authChecker = require('./helpers/authChecker.js');


// Check authetication for every single route.
app.use(authChecker);

app.use('/auth', auth);
app.use('/user', user);
app.use('/usergroup', userGroup);
app.use('/judge', judge);
app.use('/problem', problem);
app.use('/problemgroup', problemGroup);
app.use('/challenge', challenge);

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(3000, function () {
	console.log('Listening on port 3000!');
});

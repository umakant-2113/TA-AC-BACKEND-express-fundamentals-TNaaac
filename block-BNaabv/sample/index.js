var express = require('express');
var app = express();
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use((req, res, next) => {
  res.cookie('use', 12);
  next();
});

//routes
app.get('/', (req, res) => {
  res.send('<h1> Welcome to express </h1>');
});

app.get('/about', (req, res) => {
  res.send('my name is umakant');
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  res.setHeader('Content-Type', 'application/text');
  res.send(req.body);
});

app.get('/user/:username', (req, res) => {
  let user = req.params.username;
  res.send(`<h2>${user}</h2>`);
});

//404 error
app.use((req, res, next) => {
  res.send('page not found');
  res.statusCode = 404;
});

//error handler
app.use((err, req, res, next) => {
  res.status = 500;
  res.send(err);
});


//listener
app.listen(3000, () => {
  console.log('server is port on 3k');
});

const express = require( 'express' );
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('hello');
})

app.get('/news', function (req, res) {
  res.send('hello, news');
})

app.listen('3000', function (req, res) {
  console.log('server running');
});

const express = require( 'express' );
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks')

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('hello');
})

app.get('/views', function (req, res) {
  const people = [{name: 'breanna'}, {name: 'christian'}, {name: 'ben'}];
  res.render( 'index', {title: 'fullstackers', people: people} );
})

app.listen('3000', function (req, res) {
  console.log('server running');
});

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};

nunjucks.configure('views', { nocache: true });
nunjucks.render('index.html', locals, function (err, output) {
  if (err) throw err;
  console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates


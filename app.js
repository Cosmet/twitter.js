const express = require( 'express' );
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks')
const routes = require('./routes');
const socketio = require('socket.io');

var server = app.listen('3000', function (req, res) {
  console.log('server running');
});

var io = socketio.listen(server);
app.use( '/', routes(io) );
// app.use('/', routes);
app.use(morgan('dev'));

// app.get('/stylesheets/style.css', function(req, res) {
//   res.sendFile(__dirname + '/public/stylesheets/style.css', function(err) {
//     if (err) throw err;
//     console.log('file sent');
//   });
// })

app.use(express.static('public'))



// ...


// var locals = {
//   title: 'An Example',
//   people: [
//       { name: 'Gandalf'},
//       { name: 'Frodo' },
//       { name: 'Hermione'}
//   ]
// };

// nunjucks.configure('views', { nocache: true });
// nunjucks.render('index.html', locals, function (err, output) {
//   if (err) throw err;
//   // console.log(output);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates


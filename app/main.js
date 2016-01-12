var express = require('express')
  , app = express()
  , pages = require(__dirname + '/controllers/pages')
  , mu = require("mu2Express")


app.engine('mustache', mu.engine);

app.set('views', __dirname + '/views')
app.set('view engine', 'mustache')

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
//  res.send('Hello, World!')
	res.redirect('/home');
})
app.get('/home', pages.home);

module.exports = app
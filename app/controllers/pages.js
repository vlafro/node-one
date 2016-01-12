exports.home = function (req, res) {
  res.render('pages/home', {
	"locals": {
	      title: 'Home page'
	    , message: 'This is the "home" action of "pages" controller'
	}
  })
}
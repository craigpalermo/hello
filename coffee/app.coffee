# module dependencies
express = require('express')
stylus = require('stylus')
bodyParser = require('body-parser')
nib = require('nib')
logger = require('morgan')

compile = (str, path) ->
    stylus(str).set('filename', path).use(nib())

# set up app
app = module.exports = express()

app.set('views', __dirname + '/jade')
app.set('view engine', 'jade')
app.use(logger())
app.use(stylus.middleware( {
            src: __dirname + '/stylus' ,
            compile: compile
        } ))
app.use(express.static(__dirname + '/build'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

# home page
home = (req, res) ->
  ua = req.headers["user-agent"].toLowerCase()
  res.render('index', {})

# say hello
hello = (req, res) ->
  name = req.param("name")
  name = name.charAt(0).toUpperCase() + name.slice(1)
  res.send "Hello, #{name}."

# Routes
app.get('/', home)
app.get('/hello/:name/', hello)

# listen server on port 3000
app.listen(3001)

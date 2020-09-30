const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
	return res.render('index')
})

io.on('connection', socket => {
	socket.on('connect', () => {
		console.log("Hello!")
	})
})

server.listen(8080, '0.0.0.0', () => {
	console.log('Server is running at http://localhost:8080')
})
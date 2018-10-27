//Imports
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const mongodb = require('mongodb')
const cors = require('cors')
const cfg = require('./conf/config')
const collections = require('./conf/collections')

//Routers
const queryesRouter = require('./routes/queryes')
const serversRouter = require('./routes/server')

//Constants
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: 'GET, PUT, POST, DELETE'
}

//Initialize express
const app = express()
app.use(bodyParser.json())
app.use(cors(corsOptions))

//Routes
app.use('/api/queryes', queryesRouter)
app.use('/api/servers', serversRouter)

//Connect to database
// mongodb.MongoClient.connect(process.env.MONGODB_URI || cfg.dbString, (err, client) => {
//     db = client.db()
//     if (err) console.log(err);
// })

mongoose.connect('mongodb://localhost/sdl');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>{
    console.log('DB CONNECTION OPEN')
})

//Initialize app
let server = app.listen(process.env.PORT || cfg.appPort, () => {
    console.log(cfg.appName + ' Server started on port ' + cfg.appPort)
})

//Generic error handler method
function handleError(res, reason, message, code){
    console.log("ERROR: " + reason)
    res.status(code || 500).json({"error": message});
}
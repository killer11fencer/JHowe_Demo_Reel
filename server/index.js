require('dotenv').config()
express = require('express')
session = require('express-session')
massive = require('massive')
const video_Ctrl = require('./controller/video_Ctrl')
const {CONNECTION_STRING,SERVER_PORT,SESSION_SECRET} = process.env

app = express()

app.use(express.json())

app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24
      }
    })
  );

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db);
    console.log(db.listTables())
    console.log('DATABASE: Connected')
    app.listen(SERVER_PORT, () => console.log('listening on server',SERVER_PORT))
}).catch(err => console.log('err on port',err))

app.get('/api/videos',video_Ctrl.get_videos)
app.post('/api/videos',video_Ctrl.add_video)
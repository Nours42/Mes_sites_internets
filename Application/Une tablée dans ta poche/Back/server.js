const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const cors = require('cors');
app.use(cors());

if (!process.env.HOST_DB) {
	var config = require('./config-exemple')
} else {
	var config = require('./config')
}

const mysql = require('promise-mysql');

const host = process.env.HOST_DB || config.db.host;
const database = process.env.DATABASE_DB || config.db.database;
const user = process.env.USER_DB || config.db.user;
const password = process.env.PASSWORD_DB || config.db.password;
//const port = process.env.PORT_DB || config.db.port;

//import de nos routes
const authRoutes = require('./routes/authRoutes');
const partyRoutes = require('./routes/partyRoutes');
//const productsRoutes = require('./routes/productsRoutes');
//const sallesRoutes = require('./routes/sallesRoutes');
const twRoutes = require('./routes/twRoutes');
const userRoutes = require('./routes/userRoutes');

mysql.createConnection({
	host: host,
	database: database,
	user: user,
	password: password
	//port: port
})
.then((db) => {
    console.log('connecté à la bdd');
    setInterval(async function () {
		let res = await db.query('SELECT 1');
	}, 10000);
	
	app.get('/', (req, res, next)=>{
	    res.json({status: 200, msg: "Bienvenue sur 'une tablée dans ta poche' API BACK"})
	})
	
	//appel de nos routes
	authRoutes(app,db);
	//productsRoutes(app,db);
	//sallesRoutes(app, db);
	partyRoutes(app,db);
	twRoutes(app,db);
	userRoutes(app,db);
	
})
.catch(err=>console.log("Echec connexion BDD", err))


const PORT = process.env.PORT || 9500;

app.listen(PORT, ()=>{
	console.log('listening port '+PORT+' all is ok');
})
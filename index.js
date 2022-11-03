// const express = require('express');

// const path = require('path');
// const homeRoutes =require('./routes/home-routes');
// const pinjamBukuRoutes =require('./routes/pinjamBuku-routes');
// const pembayaranRoutes =require('./routes/pembayaran-routes');
// const kembalikanRoutes =require('./routes/kembalikan-routes');

// const app = express();


// app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(homeRoutes.routes);
// app.use(pinjamBukuRoutes.routes);
// app.use(pembayaranRoutes.routes);
// app.use(kembalikanRoutes.routes);


// app.listen(3000, () => console.log('App is listening on url 3000'));

const express = require('express');
const app = express();

const session = require('express-session');
const {json} = require ('sequelize');

const router = require('./routes/Userroutes');
const dotenv = require('dotenv');
const passport = require('passport');
const db = require('./config/database');
const getUsers = require('./controller/usercontroller');
try {
	db.authenticate();
	console.log("berhasil")
	db.sync();
} catch (error) {
	console.log(error);
}
dotenv.config();



app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(session({
	secret:'secret',
	resave: false,
	saveUninitialized: false,
	cookie: {
		httpOnly :true
	}
}));



app.set('view engine', 'ejs');
app.use(passport.initialize())
app.use(passport.session())
require('./config/Passport')

app.use(router);


// app.get('/', (req, res) => {
//         res.render('login.ejs');
//     });

app.get('/register', (req, res) => {
        res.render('register.ejs');
    });

app.get('/home', (req, res) => {
        res.render('home.ejs');
    });

app.get('/kembalikan', (req, res) => {
        res.render('kembalikan.ejs');
    });

app.get('/pembayaran', (req, res) => {
        res.render('pembayaran.ejs');
    });

app.get('/pinjam', (req, res) => {
        res.render('pinjam.ejs');
    });

app.get('/kelolab', (req, res) => {
   
        res.render('kelolaBuku.ejs');
   
        
    });

app.get('/kelolap', (req, res) => {
        res.render('kelolaPeminjaman.ejs');
    });

app.get('/status', (req, res) => {
        res.render('statusPeminjaman.ejs');
    });

app.get('/list', getUsers);

app.get('/admin', (req, res) => {
        res.render('admin.ejs');
    });

app.get('/tambah', (req, res) => {
        res.render('tambah.ejs');
    });

app.use(express.static('public'));

app.listen(3000, () => console.log('App is listening on url 3000'));

// app.listen(port, () => {
//     console.log('Server is running on port ' + port);
// });

module.exports = app;
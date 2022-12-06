const express = require('express');
const app = express();

const session = require('express-session');
const {json} = require ('sequelize');

const router = require('./routes/Userroutes');
const dotenv = require('dotenv');
const passport = require('passport');
const db = require('./config/database');
const getUsers = require('./controller/usercontroller');
const getAnggota = require('./controller/anggotacontroller');
const getBukus = require('./controller/homecontroller');
const getBukuAdmins = require('./controller/bukucontroller');
const getPeminjaman = require('./controller/peminjamancontroller');
const getPembayaran = require('./controller/pembayaranviewcontroller')
const getFormbayar = require('./controller/editformbayarviewcontroller')
const getPinjam = require('./controller/pinjamcontroller');
const createBuku = require('./controller/createbukucontroller');
const createPeminjaman = require('./controller/tambahPeminjamancontroller')
const createPembayaran = require('./controller/tambahpembayarancontroller')
const deletePeminjaman = require('./controller/deletepeminjamancontroller')
const deleteBuku = require('./controller/deletebukucontroller');
const deleteAnggota = require('./controller/deleteanggotacontroller');
const editAnggota = require('./controller/editanggotacontroller')
const editAnggotaView = require('./controller/editanggotaviewcontroller')
const editKembali = require('./controller/editpengembaliancontroller')
const editPeminjaman = require('./controller/editpeminjamancontroller')
const editPengembalian = require('./controller/editkembalicontroller')
const editBuku = require('./controller/editbukucontroller');
const editBukuview = require('./controller/editbukuviewcontroller');
const createAnggota = require('./controller/createanggotacontroller');
const anggotaModel = require('./models/anggotaModel');
const pembayaran = require('./models/pembayaranModel');

try {
	db.authenticate();
	console.log("berhasil")
	pembayaran.sync();
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

// app.get('/home', (req, res) => {
//         res.render('home.ejs');
//     });

app.get('/kembalikan', (req, res) => {
        res.render('kembalikan.ejs');
    });

// app.get('/formpembayaran', (req, res) => {
//         res.render('formpembayaran.ejs');
//     });


app.get('/pembayaran', getPembayaran)
app.post('/pembayaran', createPembayaran)
app.get('/formpembayaran', getFormbayar)

// app.get('/pinjam', (req, res) => {
//         res.render('pinjam.ejs');
//     });

// app.get('/kelolab', (req, res) => {
   
//         res.render('kelolaBuku.ejs');
   
        
//     });

// app.get('/kelolap', (req, res) => {
//         res.render('kelolaPeminjaman.ejs');
//     });

app.get('/status', (req, res) => {
        res.render('statusPeminjaman.ejs');
    });



app.get('/admin', getUsers);

app.get('/', getBukus);
app.get('/kelolab', getBukuAdmins);
app.post('/tambah', createBuku);
app.get('/delete/:id', deleteBuku)
app.get('/deletepeminjaman/:id', deletePeminjaman)
app.get('/deleteanggota/:id', deleteAnggota)
app.post('/editbuku/:id',editBuku);
app.get('/editbuku/:id',editBukuview);
app.get('/kembalikan/:id', editPengembalian);
app.post('/kembalikan/:id',editKembali)
app.post('/editanggota/:id',editAnggota);
app.post('/editpeminjaman/:id',editPeminjaman);
app.get('/editanggota/:id',editAnggotaView);
app.get('/kelolap', getPeminjaman);
app.get('/list', getAnggota);
app.post('/tambahanggota', createAnggota);
app.post('/pinjam', createPeminjaman)
app.get('/pinjam', getPinjam)



app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/home', (req, res) => {
        res.render('admin.ejs');
    });

app.get('/tambah', (req, res) => {
        res.render('tambah.ejs');
    });

app.get('/tambahanggota', (req, res) => {
        res.render('tambahanggota.ejs');
    });



app.use('/static',express.static('public'));

app.listen(3000, () => console.log('App is listening on url 3000'));

// app.listen(port, () => {
//     console.log('Server is running on port ' + port);
// });

module.exports = app;
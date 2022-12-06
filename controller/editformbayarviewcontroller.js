const buku = require("../models/bukuModel.js");
const anggota = require("../models/anggotaModel.js");
const peminjaman = require("../models/peminjamanModel.js");
const pembayaran = require("../models/pembayaranModel.js");

async function getFormbayar (req,res){
    try{
        const response = await peminjaman.findAll()
        res.render('formpembayaran.ejs', {
            peminjaman : response,
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = getFormbayar
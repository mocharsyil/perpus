const buku = require("../models/bukuModel.js");
const anggota = require("../models/anggotaModel.js");
const peminjaman = require("../models/peminjamanModel.js");

async function getPinjam (req,res){
    try{
        const response = await peminjaman.findAll()
        const bukus = await buku.findAll()
        const anggotas = await anggota.findAll()
        res.render('pinjam.ejs', {
            peminjaman : response,
            buku : bukus,
            anggota: anggotas
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = getPinjam
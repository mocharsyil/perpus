const buku = require("../models/bukuModel.js");
const anggota = require("../models/anggotaModel.js");
const peminjaman = require("../models/peminjamanModel.js");

async function getPengembalian (req,res){
    try{
        const response = await peminjaman.findOne({
            where : {
                id : req.params.id
            }
        })
        const bukus = await buku.findAll()
        const anggotas = await anggota.findAll()
        res.render('kembalikan.ejs', {
            peminjaman : response,
            buku : bukus,
            anggota: anggotas
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = getPengembalian
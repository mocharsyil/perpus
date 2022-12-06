const anggota = require("../models/anggotaModel.js");
const buku = require("../models/bukuModel.js");
const peminjaman = require("../models/peminjamanModel.js");

async function getPeminjaman (req,res){
    try{
        const response = await peminjaman.findAll({
           include: [
            {
                model: anggota,
                as: 'nama'
            },
            {
                model: buku,
                as: 'n_buku'
            }
           ] 
        })
        
        res.render('kelolaPeminjaman.ejs', {
            peminjaman : response
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = getPeminjaman
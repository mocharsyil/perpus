const peminjaman= require("../models/peminjamanModel")
const bukus = require("../models/bukuModel")
const anggota= require("../models/anggotaModel")
async function editKembali(req, res){
    try{
        const{id} = req.params;
        const {tanggal_dikembalikan} =req.body;
        const anggotas = await anggota.findAll()
        const buku = await bukus.findAll()
        const peminjamans = await peminjaman.findOne({
            where:{
                id:id
            }

        });
        peminjamans.tanggal_dikembalikan = tanggal_dikembalikan;
        
        await peminjamans.save();
        res.redirect('/kelolap');
    } catch(error){
        console.log(error)
    }
   
}

module.exports = editKembali
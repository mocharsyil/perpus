const peminjaman= require("../models/peminjamanModel")
const bukus = require("../models/bukuModel")
async function editPeminjaman(req, res){
    try{
        const{id} = req.params;
        const {tanggal_dikembalikan} =req.body;
        const anggotas = await anggota.findAll()
        const bukus = await bukus.findAll()
        const peminjamans = await peminjaman.findOne({
            where:{
                id:id
            }

        });
        peminjamans.nama_buku = nama_buku;
        
        await peminjamans.save();
        res.redirect('/kelolap');
    } catch(error){
        console.log(error)
    }
   
}

module.exports = editPeminjaman
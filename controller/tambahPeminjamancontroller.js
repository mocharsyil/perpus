const peminjaman= require("../models/peminjamanModel")

async function createPeminjaman (req,res){
    const {name, name_buku, tanggal_pinjam, tanggal_kembali, tanggal_dikembalikan} = req.body;
    try{
        const peminjamans = await peminjaman.create({
            name,
            name_buku,
            tanggal_pinjam,
            tanggal_kembali,
            tanggal_dikembalikan
        });
        res.redirect('/kelolap');
    } catch(error){
    console.log(error)
    }
    }


module.exports= createPeminjaman
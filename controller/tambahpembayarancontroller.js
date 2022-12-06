const peminjaman= require("../models/peminjamanModel")
const pembayaran= require("../models/pembayaranModel")

async function createPembayaran (req,res){
    const {name, jumlah_bayar, tanggal_bayar, } = req.body;
    try{
        const response = await pembayaran.create({
            id_kembali:name,
            jumlah_bayar,
            tanggal_bayar,
            
        });
        res.redirect('/pembayaran');
    } catch(error){
    console.log(error)
    }
    }


module.exports= createPembayaran
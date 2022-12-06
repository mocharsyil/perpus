const anggota= require("../models/anggotaModel")

async function createAnggota (req,res){
    const {name, alamat, tanggal_bergabung} = req.body;
    try{
        const addanggota = await anggota.create({
            name,
            alamat,
            tanggal_bergabung,
        });
        res.redirect('/list');
    } catch(error){
    console.log(error)
    }
    }


module.exports= createAnggota
const buku= require("../models/bukuModel")

async function createBuku (req,res){
    const {gambar, nama_buku, author, genre, jenis, denda} = req.body;
    try{
        const addbuku = await buku.create({
            gambar,
            nama_buku,
            author,
            genre,
            jenis,
            denda,
        });
        res.redirect('/kelolab');
    } catch(error){
    console.log(error)
    }
    }


module.exports= createBuku
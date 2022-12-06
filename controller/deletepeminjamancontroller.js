const buku = require("../models/bukuModel");
const peminjaman = require("../models/peminjamanModel");

async function deletePeminjaman(req, res){
    try{
        const {id} = req.params;
        await peminjaman.destroy({
            where:{
                id: id
            }
        });
        res.redirect("/kelolap");
    } catch(error){
        res.redirect("/kelolap");
    }
}

module.exports=deletePeminjaman
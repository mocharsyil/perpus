const buku= require("../models/bukuModel")

async function editBuku(req, res){
    try{
        const{id} = req.params;
        const {nama_buku} =req.body;
        const {gambar} =req.body;
        const {author} =req.body;
        const {genre} =req.body;
        const {jenis} =req.body;
        const {denda} =req.body;
        const bukus = await buku.findOne({
            where:{
                id:id
            }
        });
        bukus.nama_buku = nama_buku;
        bukus.gambar = gambar;
        bukus.author = author;
        bukus.genre = genre;
        bukus.jenis = jenis;
        bukus.denda = denda;
        await bukus.save();
        res.redirect('/kelolab');
    } catch(error){
        console.log(error)
    }
   
}

module.exports = editBuku
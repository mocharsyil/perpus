const buku = require("../models/bukuModel.js");


async function getBukuAdmins (req,res){
    try{
        const response = await buku.findAll()
        res.render('kelolaBuku.ejs', {
            buku : response
        })
    } catch (e) {
        console.log(e)
    }
}

// async function createBuku (req,res){
//     const {gambar, nama_buku, author, genre, jenis, denda} = req.body;
//     try{
//         const addbuku = await buku.create({
//             gambar,
//             nama_buku,
//             author,
//             genre,
//             jenis,
//             denda,
//         });
//         res.redirect('/kelolab');
//     } catch(error){
//     console.log(error)
//     }
//     }




module.exports = getBukuAdmins
// module.exports = createBuku

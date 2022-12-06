const buku = require("../models/bukuModel.js");

async function getBukus (req,res){
    try{
        const response = await buku.findAll()
        res.render('home.ejs', {
            buku : response
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = getBukus
const anggota = require("../models/anggotaModel.js");

async function getAnggota (req,res){
    try{
        const response = await anggota.findAll()
        res.render('listAnggota.ejs', {
            anggotas : response
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = getAnggota
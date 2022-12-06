const anggotas = require("../models/anggotaModel");

async function deleteAnggota(req, res){
    try{
        const {id} = req.params;
        await anggotas.destroy({
            where:{
                id: id
            }
        });
        res.redirect("/list");
    } catch(error){
        res.redirect("/list");
    }
}

module.exports = deleteAnggota
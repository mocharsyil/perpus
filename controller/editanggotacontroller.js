const anggotas= require("../models/anggotaModel")

async function editAnggota(req, res){
    try{
        const{id} = req.params;
        const {name} =req.body;
        const {alamat} =req.body;
        const anggota = await anggotas.findOne({
            where:{
                id:id
            }
        });
        anggota.name = name;
        anggota.alamat = alamat;
        await anggota.save();
        res.redirect('/list');
    } catch(error){
        console.log(error)
    }
   
}


module.exports = editAnggota
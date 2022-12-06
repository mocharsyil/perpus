anggotas = require("../models/anggotaModel")
async function editAnggotaView (req,res){
    try{
        const {id} = req.params;
        const response = await anggotas.findOne({
            where:{
                id: id
            }
        })
        res.render('editAnggota.ejs', {
            anggotas : response
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports=editAnggotaView
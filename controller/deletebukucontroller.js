const buku = require("../models/bukuModel");

async function deleteBuku(req, res){
    try{
        const {id} = req.params;
        await buku.destroy({
            where:{
                id: id
            }
        });
        res.redirect("/kelolab");
    } catch(error){
        res.redirect("/kelolab");
    }
}

module.exports=deleteBuku
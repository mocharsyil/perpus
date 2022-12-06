const buku = require("../models/bukuModel")

async function editBukuview (req,res){
    try{
        const {id} = req.params;
        const response = await buku.findOne({
            
            where:{

                id: id
            }
        })
        res.render('editBuku.ejs', {
            buku : response
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = editBukuview
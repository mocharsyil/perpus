const pembayaran = require('../models/pembayaranModel')
const peminjaman = require('../models/peminjamanModel')

async function getPembayaran (req,res){
    try{
        const response = await pembayaran.findAll({
            include: [
                {
                    model: peminjaman,
                    as: 'id_bayar'
                }
               ] 
        })
        res.render('pembayaran.ejs', {
            pembayaran : response
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports= getPembayaran

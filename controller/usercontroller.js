const Users = require("../models/userModel.js");

async function getUsers (req,res){
    try{
        const response = await Users.findAll()
        res.render('admin.ejs', {
            users : response
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = getUsers
const { Sequelize } = require('sequelize')
const db = require('../config/database')
const { DataTypes } = Sequelize;

const buku = db.define('buku', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
        
    },
    gambar:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    nama_buku:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    author:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    genre:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    jenis:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    denda:{
        type: DataTypes.INTEGER,
        allowNull: true,
    }
});



module.exports = buku
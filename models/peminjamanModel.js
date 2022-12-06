const { Sequelize } = require('sequelize')
const db = require('../config/database')
const { DataTypes } = Sequelize;
const anggota = require("../models/anggotaModel")
const buku = require("../models/bukuModel")

const peminjaman = db.define('peminjaman', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate:{
            notEmpty: true
        }
    },
    name_buku:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: true,
        },
        references: {
            model: buku,
            key: 'id'
        }
    },
    name:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: true,
        },
        references: {
            model: anggota,
            key: 'id'
        }
    },
    tanggal_pinjam:{
        type: DataTypes.DATE,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    tanggal_kembali:{
        type: DataTypes.DATE,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    tanggal_dikembalikan:{
        type: DataTypes.DATE,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    }
});

peminjaman.belongsTo(anggota, {foreignKey: 'name', as: 'nama'});
peminjaman.belongsTo(buku, {foreignKey: 'name_buku', as: 'n_buku'});


module.exports = peminjaman
const { Sequelize } = require('sequelize')
const db = require('../config/database')
const { DataTypes } = Sequelize;
const anggota = require("../models/anggotaModel")
const buku = require("../models/bukuModel")
const peminjaman = require("../models/peminjamanModel")

const pembayaran = db.define('pembayaran', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate:{
            notEmpty: true
        }
    },
    id_kembali:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: true,
        },
        references: {
            model: peminjaman,
            key: 'id'
        }
    },
    jumlah_bayar:{
        type: DataTypes.INTEGER,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    tanggal_bayar:{
        type: DataTypes.DATE,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    }
});


pembayaran.belongsTo(peminjaman, {foreignKey: 'id_kembali', as: 'id_bayar'});


module.exports = pembayaran
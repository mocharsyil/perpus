const { Sequelize } = require('sequelize')
const db = require('../config/database')
const { DataTypes } = Sequelize;

const anggota = db.define('anggotas', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    alamat:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },
    tanggal_bergabung:{
        type: DataTypes.DATE,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    }
});



module.exports = anggota
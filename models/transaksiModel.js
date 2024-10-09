import User from "./UserModel.js";
import { DataTypes } from "sequelize";
import Medicine from "./medicineModel.js";
import db from "../utils/connection.js";

const Transaksi = db.define(
    "Transaksi",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        total_harga: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tanggal_pembelian: {
            type: DataTypes.DATE,
            allowNull: false
        },
        info_transaksi: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "transaksi"
    }
)

Medicine.hasMany(Transaksi, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Transaksi.belongsTo(Medicine, {
    foreignKey: "MedicineId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

export default Transaksi;
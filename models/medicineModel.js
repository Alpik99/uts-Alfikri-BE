import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
// import Transaksi from "./transaksiModel.js";
import Pemasok from "./pemasokModel.js";

const Medicine = db.define (
    "Medicine",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "medicine"
    }
)

Medicine.hasMany(Pemasok, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Pemasok.belongsTo(Medicine, {
    foreignKey: "MedicineId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})




export default Medicine;
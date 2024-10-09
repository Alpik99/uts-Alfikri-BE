import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
// import Transaksi from "./transaksiModel.js";

const Pemasok = db.define (
    "Pemasok",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        namaPemasok: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alamat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teleponPemasok: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tableName: "pemasok"
    }
)




export default Pemasok;
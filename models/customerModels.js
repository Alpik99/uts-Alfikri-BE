import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import Transaksi from "./transaksiModel.js";

const Customer = db.define (
    "Customer",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        tableName: "customer"
    }
)

Customer.hasMany(Transaksi, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Transaksi.belongsTo(Customer, {
    foreignKey: "CustomerId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

export default Customer;
import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Medicine from "./medicineModel.js";

const User = db.define(
    "User",
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
        nomor : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    },
    {
        tableName: "user"
    }
)

User.hasMany(Medicine, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Medicine.belongsTo(User, {
    foreignKey: "UserId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

export default User;
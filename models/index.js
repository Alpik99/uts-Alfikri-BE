import db from "../utils/connection.js";
import medicine from "./medicineModel.js";
import User from "./UserModel.js";
import customer from "./customerModels.js";
import Pemasok from "./pemasokModel.js";
import Transaksi from "./transaksiModel.js";


await db.sync({ alter: true });

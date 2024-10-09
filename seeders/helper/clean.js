import User from "../../models/UserModel.js";
import medicine from "../../models/medicineModel.js";

export default async function clean() {
    await medicine.destroy({
        where: {},
        force: true,
        cascade: true
    });

    await User.destroy({
        where: {},
        force: true,
        cascade: true
    })
}
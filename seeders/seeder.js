// // import { Types } from "mysql2";
// import User from "../models/UserModel.js";
// import medicine from "../models/medicineModel.js";


// const createSeeder = async () =>{
//     const user = await User.create({
//         name: "mas yatno",
//         id_petugas: "123123",
//         email: "yatno123@gmail.com"
//     })

//     const medicine1 = await medicine.create({
//         name: "panadol",
//         type: "tablet",
//         description: "untuk pusing"
//     })
    
//     const findMedicineById = await medicine.findAll({
//         where: {
//             medicineId : medicine.dataValues.id,
//         },
//         attributes:  ["name", "type" , "description", "medicineId"]
//     });
//     return { medicine, findMedicineById }
// }

// const { user, findMedicineById: medicines} = await createSeeder()
// console.log("INI DATA USER") 
// console.log(user)
// console.log("INI DATA OBAT")
// medicines.map((item) => {
//     console.log(item.dataValues)
// })
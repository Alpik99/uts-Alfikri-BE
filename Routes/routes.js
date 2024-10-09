    import express from 'express';
    import { createUser, deleteUser, getAllUser, getUserById, updateUser } from '../controller/UserController.js'
    import { createMedicine, deleteMedicine, getAllMedicine, getMedicineById, updateMedicine } from '../controller/MedicineController.js';
    import { createTransaksi, deleteTransaksi, getAllTransaksi, getTransaksiById, updateTransaksi } from '../controller/transaksiController.js';
    import { createCustomer, deleteCustomer, getAllCustomer, getCustomerById, updateCustomer } from '../controller/customerController.js';
    import { createPemasok, deletePemasok, getAllPemasok, getPemasokById, updatePemasok } from '../controller/pemasokController.js';
    const router = express.Router();

    // USER
    router.get("/User", getAllUser)
    router.get("/User/find/:id", getUserById)
    router.post("/User/create", createUser)
    router.put("/User/update/:id", updateUser)
    router.delete("/User/delete/:id", deleteUser)

    // MEDICINE
    router.get("/Medicine", getAllMedicine)
    router.get("/Medicine/find/:id", getMedicineById)
    router.post("/Medicine/create", createMedicine)
    router.put("/Medicine/update/:id", updateMedicine)
    router.delete("/Medicine/delete?:id", deleteMedicine)

    // TRANSAKSI
    router.get("/Transaksi", getAllTransaksi)
    router.get("/Transaksi/find/:id", getTransaksiById)
    router.post("/Transaksi/create", createTransaksi)
    router.put("/Transaksi/update/:id", updateTransaksi)
    router.delete("/Transaksi/delete/:id", deleteTransaksi)

    // CUSTOMER
    router.get("/Customer", getAllCustomer)
    router.get("/Customer/find/:id", getCustomerById)
    router.post("/Customer/create", createCustomer)
    router.put("/Customer/update/:id", updateCustomer)
    router.delete("/Customer/delete/:id", deleteCustomer)

    // PEMASOK
    router.get("/Pemasok", getAllPemasok)
    router.get("/Pemasok/find/:id", getPemasokById)
    router.post("/Pemasok/create", createPemasok)
    router.put("/Pemasok/update/:id", updatePemasok)
    router.delete("/Pemasok/delete/:id", deletePemasok)


    export default router
import Medicine from "../models/medicineModel.js";


export const getAllMedicine = async (req, res) => {
    try{
        const medicine = await Medicine.findAll();
        res.status(200).json(medicine)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllMedicine"})
    }
};

export const getMedicineById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const medicine = await Medicine.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!medicine) {
            return res.status(404).json({ message: "obat tidak ditemukan" });
        }
        res.status(200).json(medicine);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createMedicine = async (req, res) => {
    const { name, type, description } = req.body;
    const medicine = await Medicine.create({ name, type, description });
  
    res.status(201).json(medicine);
};


export const updateMedicine = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, type, description } = req.body;
        const updated = await Medicine.update({ name, type, description }, { where: { id } });
        const updateMedicine = await Medicine.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({ message: "obat tidak ter-update"})
        }else{
            res.status(200).json(updateMedicine);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate obat"})
    }
}

export const deleteMedicine = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Medicine.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}
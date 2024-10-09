import Pemasok from "../models/pemasokModel.js";



export const getAllPemasok = async (req, res) => {
    try{
        const pemasok = await Pemasok.findAll();
        res.status(200).json(pemasok)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllPemasok"})
    }
};

export const getPemasokById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const pemasok = await Pemasok.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!pemasok) {
            return res.status(404).json({ message: "customer tidak ditemukan" });
        }
        res.status(200).json(pemasok);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};



export const createPemasok = async (req, res) => {
    try{
        const { first_name, last_name, phoneNumber } = req.body;
        const pemasok = await Pemasok.create({first_name, last_name, phoneNumber});
        res.status(200).json(pemasok);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createCustomer"})
    }
}


export const updatePemasok = async (req, res) => {
    try{
        const { id } = req.params;
        const { namaPemasok, alamat, teleponPemasok } = req.body;
        const updated = await Pemasok.update({ namaPemasok, alamat, teleponPemasok }, { where: { id } });
        const updatePemasok = await Pemasok.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({ message: "pemasok tidak ter-update"})
        }else{
            res.status(200).json(updatePemasok);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate data customer"})
    }
}

export const deletePemasok = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Pemasok.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}
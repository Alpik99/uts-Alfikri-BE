import User from "../models/UserModel.js"


export const getAllUser = async (req, res) => {
    try{
        const user = await User.findAll();
        res.status(200).json(user)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllCustomer"})
    }
};

export const getUserById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const user = await User.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!user) {
            return res.status(404).json({ message: "Customer tidak ditemukan" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createUser = async (req, res) => {
    const { name, nomor, email } = req.body;
    const user = await User.create({ name, nomor, email });
  
    res.status(201).json(user);
};


export const updateUser = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, nomor, email } = req.body;
        const updated = await User.update({ name, nomor, email }, { where: { id } });
        const updatedUser = await User.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({ message: "User tidak ter-update"})
        }else{
            res.status(200).json(updatedUser);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate User"})
    }
}

export const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await User.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}
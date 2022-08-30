const mongoose = require('mongoose');
const Categoria = mongoose.model('Categoria');

exports.getCategoria = async () => {
    const categoria = await Categoria.find({}, 'categoria _id');

    return categoria;
}


exports.create = async (data)=>{
    let categoria = Categoria(data);
    await categoria.save();
}

exports.put = async (id,data) => {
    await Categoria.findByIdAndUpdate(id, {
        $set:{
            categoria: data.categoria
        }
    });
}

exports.getById = async (id) => {

    let categoria = await Categoria.findById({_id : id}, 'categoria _id');
    return categoria;
    
}

exports.delete = async (id) => {
    await Categoria.findByIdAndDelete(id);
}
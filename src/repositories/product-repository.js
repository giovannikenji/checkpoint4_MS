const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const categoriaRepo = require('../repositories/categoria-repository')

exports.getProduct = async () => {
    const results = await Product.find({}, 'title price description _id categoriaId active');

    return results;
}

exports.create = async (data) => {
    console.log(data);
    let produto = Product(data);
    await produto.save();
}

exports.put = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            description: data.description,
            price: data.price,
            categoriaId: data.categoriaId,
            active: data.active            
        }
    });
}

exports.getById = async (id) => {
    const result = await Product.findById({_id : id}, "title price description _id categoriaId active")
    return result;
}


//inativar o objeto da tabela
exports.delete = async (id) => {
    await Product.findByIdAndUpdate(id);
}
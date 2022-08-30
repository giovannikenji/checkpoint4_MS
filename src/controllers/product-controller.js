const { response } = require('express');
const mongoose = require('mongoose');
const repository = require('../repositories/product-repository');

exports.get = async(req, res, next) => {
    const data = await repository.getProduct();
    res.status(200).send(data);

}

exports.post = async(req, res, next) => {

    try {
        await repository.create(req.body);
        res.status(201).send({message: "Produto criado com sucesso!"});
    } catch(erro){
        res.status(400).send({message: "erro ao cadastrar produto"});
    }
    
}

exports.put = async(req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    await repository.put(id, body);
    res.status(200).send({message: "Atualizado com sucesso!"});
}


exports.getById = async(req, res, next) => {
    const id = req.params.id;
    const data = await repository.getById(id);
    res.status(200).send(data);
}


exports.delete = async(req, res, next) => {
    const id = req.params.id;
    await repository.delete(id);
    res.status(200).send({"message" : "Removido com sucesso"})
}
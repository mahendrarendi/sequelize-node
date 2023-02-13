const { request, response } = require("express")
const { json } = require("sequelize")
const { sequelize } = require("../models/index")

// load model for member table
const memberModel = require(`../models/index`).member

// load operation for sequielize
const Op = require(`sequelize`).Op

// create all function to read all data
exports.getAllMember = async(request, response) => {
    let member = await memberModel.findAll()
    return response.json({
        success: true,
        data: member,
        message: `All member can be loaded`
    })
}

// create function for filter
exports.findMember = async(request, response) => {
    let keyword = request.body.keyword

    let member = await memberModel.findAll({
        where: {
            [Op.or]: [
                { name: {[Op.substring]: keyword}},
                { gender: {[Op.substring]: keyword}},
                { address: {[Op.substring]: keyword}}
            ]
        }
    })
    return response.json({
        success: true,
        data: member,
        message: `All member have been loaded`
    })
}


// create function for add new member
exports.addMember = async(request, response) => {
    let newMember = {
        nama: request.body.name,
        address: request.body.address,
        gender: request.body.gender,
        contact: request.body.contact
    }
    // execute insert new data member to member table
    memberModel.create(newMember)
    .then(result => {
        // if insert data success
        return response,json({
            success: true,
            data: result,
            message: `New Member has been inserted`
        })
    })
    .catch(error => {
        return response.json({
            success: false,
            message: error.message
        })
    })
}

// create function for update member
exports.UpdateMember = async(request, response) => {
    let dataMember = {
        nama: request.body.name,
        address: request.body.address,
        gender: request.body.gender,
        contact: request.body.contact
    }
    
    // define id member to execute to be update
    let idMember = request.params.id

    // execute update data base on id
    memberModel.update(dataMember, { where: {id: member}
    }) .then(result => {
        return response.json({
            success: true,
            message: `Data member has been updated`
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
    })
}

// create function for delete data member
exports.deleteMember = async (request, response) => {
    let idMember = request.params.id
    memberModel.destroy(dataMember, { where: {id: member}
    }) .then(result => {
        return response.json({
            success: true,
            message: `Data has been deleted`
        })
    }) .catch(error => {
        return response.json({
            success: false,
            message: error.message
        })
    })
}
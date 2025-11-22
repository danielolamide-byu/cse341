
// import { ObjectId } from 'mongodb';

const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDatabase().db('people').collection('contacts').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    })
    }
    catch (error) {
        console.log("Error fetching contacts.", error);
    }
};

const getSingle = async (req, res) => {
    try {
         const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('people').collection('contacts').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    })
    }
    catch (error) {
        console.log("Error fetching contact.", error)
    }
};

const createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db('people').collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(200).send("Yay, contact created successfully.");
    } else {
        res.status(500).json("Something wenet wrong while trying to create contact.");
    }
}

const updateContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db('people').collection('contacts').replaceOne({ _id: userId }, contact);
    if (response.modifiedCount > 0) {
        res.status(200).send("Yay, Contact Updated Successfully.");
    } else {
        res.status(500).json(response.error);
    }
};

const deleteContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db('people').collection('contacts').deleteOne({ _id: userId }, true);
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json("Error while attempting to delete contact.");
    }
}
 
module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};

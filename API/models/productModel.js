const mongoose = require('mongoose');
const productSchema = require('./productSchema');
const Product = require('./productSchema')

exports.getProducts = (req, res) => {
  Product.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.getProduct = (req, res) => {
  //Product.findById(req.params.id)
  //.then(product => res.status(200).json(product))
  //.catch(err => res.status(500).json(err))
  Product.exists({_id: req.params.id}, (err, result) => {
    if(err){
      return res.status(400).json(err)
    } 
    else {
      if(result) {
        Product.findById(req.params.id)
        .then(product => res.status(200).json(product))
        .catch(err => res.status(500).json(err))
      }
      else {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Denna produkt finns inte'
        })
      }
    }
  })
}

exports.createProduct = (req, res) => {
  Product.exists({ name: req.body.name }, (err, result) => {
    if(err) {
      return res.status(500).json(err)
    } else {
      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Finns redan en produkt med detta namn, uppdatera produkten istället'
        })
      }

      const newProduct = new Product({
        name: req.body.name,
        short: req.body.short,
        desc: req.body.desc,
        price: req.body.price,
        image: req.body.image
      })

      newProduct.save()
      .then(() => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message: 'produkten skapades'
        })
      })
      .catch(() => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Blev något fel med att skapa produkten'
        })
      })
    }
  })
}

exports.updateProduct = (req, res) => {
  Product.exists({_id: req.params.id}, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        Product.updateOne({_id: req.params.id}, {
          ...req.body,
          modified: Date.now()
        })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Produkten uppdaterades'
          })
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Produkten kunde inte uppdateras'
          })
        })
      }
      else {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Denna produkt finns inte'
        })

      }
    }
  })
}

exports.deleteProduct = (req, res) => {
  Product.exists({_id: req.params.id}, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    }
     else {
      if(result){
        product.deleteOne({_id: req.params.id})
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Produkten raderades'
          })
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Kunde inte radera produkten'
          })
        })
      }
      else {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Denna produkt finns inte'
        })
      }
    }
  })
}
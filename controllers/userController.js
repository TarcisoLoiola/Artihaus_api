// userController.js
const db = require('../models')

module.exports = {

  create: (req, res) => {
    db.User
      .create(req.body)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err))
  },

  read: (req, res) => {
    db.User
      .find(req.body)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(422).json(err))
  },

  update: (req, res) => {
    db.User
    .findOneAndUpdate({_id: req.body._id}, {$set: req.body})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(422).json(err))
  },

  delete: (req, res) => {
    db.User
    .findByIdAndDelete({_id: req.body._id})
    .the.then(data => res.status(200).json(data))
    .catch(err => res.status(422).json(err))
  }
}
const express = require('express')
const router = express.Router()
const users = require('./user')

router.route('/user')
        .get((req,res) => {
            const result = {"data": users}
            res.send(result)
        })
        .post((req,res) => {
            let user = {id: req.body.id,username: req.body.username}
            users.push(user)
            const result = {"data": users}
            res.send(result)
        })
router.route('/user/:id')
        .get((req,res) => {
            let user = users.filter(user => user.id === req.params.id)
            const result = {"data": user}
            res.send(result)
        })
        .put((req,res) => {
            const {username,name} = req.body
            let user = users.map(user => (user.id === req.params.id) ? {...user,id: user.id,username: username,name: name}: user)
            const result = {"data": user}
            res.status(200)
            res.send(result)
        })
        .delete((req,res) => {
            let user = users.filter(user => user.id !== req.params.id)
            const result = {"data": user}
            res.send(result)
        })

module.exports = router
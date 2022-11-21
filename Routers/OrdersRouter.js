const express = require('express')

const userBL = require('../BL/OrdersBL');

const router = express.Router();


router.route('/')
    .get(function(req, resp)
    {
       userBL.getAllOrders().then(data =>{ return resp.json(data)} );
       
    })

/*
router.route('/')
    .get(async function(req, resp)
    {
       let data = await userBL.getAllPersons();
       return resp.json(data);
    })
*/
router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id

        userBL.getOrderbyid(id).then(data=>{return resp.json(data)});
       
    })


router.route('/')
    .post(function(req, resp)
    {
        let obj = req.body

       userBL.creatOrder(obj).then(data=>{
       return resp.json(data)});
    })

router.route('/:id')
    .put(function(req, resp)
    {
        let obj = req.body
        let id = req.params.id;

       userBL.updateOrder(id,obj).then(data=>{
       return resp.json(data)});
    })


router.route('/:id')
    .delete(function(req, resp)
    {
       
        let id = req.params.id;

       userBL.deleteOrder(id).then(data=>{
       return resp.json(data)});
    })



module.exports = router;

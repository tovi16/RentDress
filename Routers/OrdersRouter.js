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

       userBL.creatOrder(obj);
       return resp.json("Created");
    })

router.route('/:id')
    .put(function(req, resp)
    {
        let obj = req.body
        let id = req.params.id;

       userBL.updateOrder(id,obj);
       return resp.json("Updated");
    })


router.route('/:id')
    .delete(function(req, resp)
    {
       
        let id = req.params.id;

       userBL.deleteOrder(id);
       return resp.json("Deleted");
    })



module.exports = router;

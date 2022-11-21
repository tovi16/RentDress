const express = require('express')

const userBL = require('../BL/SellersBL');

const router = express.Router();


router.route('/')
    .get(function(req, resp)
    {
       userBL.getAllSellers().then(data =>
        { return resp.json(data)} );
       
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

        userBL.getSellerbyid(id).then(data=>
            {return resp.json(data)});
       
    })


router.route('/')
    .post(function(req, resp)
    {
        let obj = req.body

       userBL.creatSeller(obj).then(data=>
        {return resp.json(data)});;
       
    })

router.route('/:id')
    .put(function(req, resp)
    {
        let obj = req.body
        let id = req.params.id;

       userBL.updateSeller(id,obj).then(data=>
        {return resp.json(data)});
       
    })


router.route('/:id')
    .delete(function(req, resp)
    {
       
        let id = req.params.id;

       userBL.deleteSeller(id).then(data=>
        {return resp.json(data)});
       
    })



module.exports = router;

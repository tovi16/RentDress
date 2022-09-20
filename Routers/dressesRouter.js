const express = require('express')

const userBL = require('../BL/DressesBL');

const router = express.Router();


router.route('/')
    .get(function(req, resp)
    {
         userBL.getAllDresses().then(data=>{return resp.json(data)});
      
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

         userBL.getDressbyid(id).then(data=>{return resp.json(data)});
       
    })


router.route('/')
    .post(function(req, resp)
    {
        let obj = req.body

       userBL.creatDress(obj);
       return resp.json("Created");
    })

router.route('/:id')
    .put(function(req, resp)
    {
        let obj = req.body
        let id = req.params.id;

       userBL.updateDress(id,obj);
       return resp.json("Updated");
    })


router.route('/:id')
    .delete(function(req, resp)
    {
       
        let id = req.params.id;

       userBL.deleteDress(id);
       return resp.json("Deleted");
    })



module.exports = router;

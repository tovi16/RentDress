const express = require('express')

const userBL = require('../BL/UsersBL');

const router = express.Router();


router.route('/')
    .get(function(req, resp)
    {console.log("router")
     userBL.getAllUsers().then(data =>{ return resp.json(data)} );
       

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

        userBL.getUserbyid(id).then(data=>{return resp.json(data)});
       
    })


router.route('/')
    .post(function(req, resp)
    {
        let obj = req.body

       userBL.creatUser(obj);
       return resp.json("Created");
    })

router.route('/:id')
    .put(function(req, resp)
    {
        let obj = req.body
        let id = req.params.id;

       userBL.updateUser(id,obj);
       return resp.json("Updated");
    })


router.route('/:id')
    .delete(function(req, resp)
    {
       
        let id = req.params.id;

       userBL.deleteUser(id);
       return resp.json("Deleted");
    })



module.exports = router;

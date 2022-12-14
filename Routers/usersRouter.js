const express = require('express')

const userBL = require('../BL/UsersBL');

const router = express.Router();

const jwt= require('jsonwebtoken');
const app= express();
const accessTokenSecret='somerandomaccestokem'
const refreshTokenSecret='somerandomforrefreshingtoken'

const authenticateJWT=(req,res,next)=>{

    const authHeader=req.headers.authorization;
    if (authHeader)

    {
        const token=authHeader.split(' ')[1];
        jwt.verify(authHeader,accessTokenSecret,(err,user)=>
        {
            if(err)
            {
                console.log(err)
                return res.sendStatus(403);
            }
            req.user=user;
            next();

        });
        

    }
    else 
    {
        res.sendStatus(401);
    }
    
}


router.route('/')
    .get(authenticateJWT,function(req, resp)
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
    .get(authenticateJWT,function(req, resp)
    {
        let id = req.params.id

        userBL.getUserbyid(id).then(data=>{return resp.json(data)});
       
    })


router.route('/register')
    .post(authenticateJWT,function(req, resp)
    {
        let obj = req.body

       userBL.creatUser(obj).then(data=>{return resp.json(data)}).catch(err=> resp.status(400).send(err));
    })

router.route('/:id')
    .put(authenticateJWT,function(req, resp)
    {
        let obj = req.body
        let id = req.params.id;

       userBL.updateUser(id,obj).then(data=>{return resp.json(data)});
    })


router.route('/:id')
    .delete(authenticateJWT,function(req, resp)
    {
       
        let id = req.params.id;

       userBL.deleteUser(id).then(data=>{;
       return resp.json(data)});
    })

    router.route('/login')
    .post(function(req, resp)
    {
       
        const{mail,password}=req.body;
        userBL.login(mail,password).then(data=>{return resp.json(data)}).catch(err=>resp.status(400).send(err))

    })


module.exports = router;

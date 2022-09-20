const express=require("express");
const UsersRouter=require("./Routers/usersRouter")
const OrdersRouter=require("./Routers/OrdersRouter")
const DressesRouter=require("./Routers/DressesRouter")
const SellersRouter=require("./Routers/SellersRouter")
const app = express();
var cors=require('cors');
app.use(cors())
//app.use(express, json()); 
app.use(express.json());
require("./Configs/database");
//const bodyParser=require('body-paser')
//app.use(bodyParser.urlencoded({extended:fase}));
app.use('/api/users',UsersRouter);
app.use('/api/orders',OrdersRouter);
app.use('/api/dresses',DressesRouter);
app.use('/api/sellers',SellersRouter);
app.listen(8000);

// const UsersBL = require("./BL/UsersBL")
 //const DressesBL = require("./BL/DressesBL")

 //const users=UsersBL.getAllUsers()
//async function userbyidFunc (){
     //const userbyid = await UsersBL.deleteUser(2)
    //console.log(userbyid)
// }
// userbyidFunc()
//console.log(users)

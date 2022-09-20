const mongoose = require("mongoose")
mongoose.connect(
    'mongodb+srv://Rentdress:RentDress2022@cluster0.heibsx8.mongodb.net/RentDress?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
     }
),
 ()=>{

    try{
        //
    }
    catch(error){
        console.log(error)
    }
};
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('connection to db was succesfull');
});





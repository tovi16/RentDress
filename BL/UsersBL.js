const UsersModel = require("../Models/UsersModel").default
const jwt = require('jsonwebtoken');

exports.getAllUsers = function() 
{
  return new Promise((resolve,reject) => 
  {
    UsersModel.find({}, function (err, data) 
    {
       if (err)
       {
        reject(err)
        console.log(err)
       }
      else 
      {
        console.log(data)
        resolve(data);

      }
    })
  })
}

exports.getUserbyid = (id) => {
  return new Promise((resolve,reject) => {
    UsersModel.findById(id, function(err, data)
    {
      if (err)
      {
        reject(err)
        console.log(err)
      }
      else 
      {
        console.log(id)
        resolve(data);
      }
    })
  })
}


exports.creatUser = (obj) => 
{
  return new Promise(async(resolve,reject)=> 
  {
    const users =await this.getAllUsers().then(data=>{return data} ,function(err,data)
    {
        if(err)
        {
          reject(err)
        }
        
    });

    const email = users.find(u=>{return u.Mail=== obj.Mail},function(err,data)
    {

      if (err)
      {
        reject(err)
      }
      else
      {
        resolve(data)
      }
    });


    if(!email)
     {
        let user= new UsersModel(
        {
            FirstName : obj.FirstName,
            LastName : obj.LastName,
            Mail : obj.Mail,
            Password : obj.Password
        })

        user.save(function(err)
        {

         if (err)
         {
            console.log(err)
            reject(err)
         }
         else
         {
            resolve("created!")
         }
        })
    }
    else
    reject("this email adress already exist")
     
  })
}

exports.updateUser = (id, obj) => 
{
  return new Promise(resolve => 
    {
      UsersModel.findByIdAndUpdate(id,
        {

        FirstName : obj.FirstName,
            LastName : obj.LastName,
            Mail : obj.Mail,
            Password : obj.Password

        },function(err)
      {
    
      if (err)
      {
        console.log(err)
        reject(err)
      }
      else 
        {
        
          resolve("updated")
        }
      })
    })
}


exports. deleteUser = (id) => {
  return new Promise((resolve ,reject)=> {

    UsersModel.findByIdAndDelete(id,function(err) 
    {
      if (err){
        reject(err)
        console.log(err)
      }
      else {
         resolve("deleted");
        console.log("deleted");

      }


    })
  })


}

exports. login=(Mail,Password)=>
{
  return new Promise(async (resolve,reject)=>
  {
    //check if the user exsist in the db
    var users = await getAllUsers().then(data=>{return data});
    //creat secret string
    const accessTokenSecret='somerandomtoken'
    const refreshToken='refreshaccesstoken'
    let refreshTokens=[];
    // filter user from the users aray by email and password
    const user=users.find(u=>{return u.Mail=== Mail && u.Password===Password});


    if (user)// if user exist 
    
    {
      //generate an acces token
      const accessToken=jwt.sign({Mail:user.Mail},accessTokenSecret,{expireIn:7200});
      const refreshaccesstoken=jwt.sign({Mail:user},refreshToken)


      refreshTokens.push(refreshToken)

      resolve({

        accessToken,
        refreshaccesstoken

      });

    }
    else{

      reject ("mail  address or password incorrect")
      return;
    }

    }

)}



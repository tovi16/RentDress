const UsersModel = require("../Models/UsersModel")

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


exports.creatUser = (obj) => {
  return new Promise((resolve,reject)=> 
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




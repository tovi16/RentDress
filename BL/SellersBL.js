const SellersModel = require("../Models/SellersModel").default

exports.getAllSellers = function() 
{
  return new Promise((resolve,reject) => 
  {
    SellersModel.find({}, function (err, data) 
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

exports.getSellerbyid = (id) => {
  return new Promise((resolve,reject) => {
    SellersModel.findById(id, function(err, data)
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


exports.creatSeller = (obj) => {
  return new Promise((resolve,reject)=> 
  {
    
        let seller= new SellersModel(
        {
            Name: obj.Name,
            Adress: obj.Adress,
            Phone: obj.Phone,
            Mail: obj.Mail,
            Dresses_id: obj.Dresses_id
        })

        seller.save(function(err)
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

exports.updateSeller = (id, obj) => 
{
  return new Promise(resolve => 
    {
      SellersModel.findByIdAndUpdate(id,
        {

            Name: obj.Name,
            Adress: obj.Adress,
            Phone: obj.Phone,
            Mail: obj.Mail,
            Dresses_id: obj.Dresses_id

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


exports. deleteSeller = (id) => {
  return new Promise((resolve ,reject)=> {

    SellersModel.findByIdAndDelete(id,function(err) 
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




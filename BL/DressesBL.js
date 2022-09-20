const DressesModel = require("../Models/DressesModel")

exports.getAllDresses = function() 
{
  return new Promise((resolve,reject) => 
  {
    DressesModel.find({}, function (err, data) 
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

exports.getDressbyid = (id) => {
  return new Promise((resolve,reject) => {
    DressesModel.findById(id, function(err, data)
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


exports.creatDress = (obj) => {
  return new Promise((resolve,reject)=> 
  {
    
        let dress= new DressesModel(
        {
          SellerId : obj.SellerId,
          Datetime : obj.Datetime,
          Length: obj.Length,
          Color : obj.Color,
          Size:obj.Size,
          Sleeves:obj.Sleeves,
          Price:obj.Price,
          Type:obj.Type,
          Category:obj.Category,
          Picture:obj.Picture,
          Status:obj.Status
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

exports.updateDress = (id, obj) => 
{
  return new Promise(resolve => 
    {
      DressesModel.findByIdAndUpdate(id,
        {

          SellerId : obj.SellerId,
          Datetime : obj.Datetime,
          Length: obj.Length,
          Color : obj.Color,
          Size:obj.Size,
          Sleeves:obj.Sleeves,
          Price:obj.Price,
          Type:obj.Type,
          Category:obj.Category,
          Picture:obj.Picture,
          Status:obj.Status

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


exports. deleteDress = (id) => {
  return new Promise((resolve ,reject)=> {

    DressesModel.findByIdAndDelete(id,function(err) 
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




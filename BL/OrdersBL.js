const OrdersModel = require("../Models/OrdersModel")

exports.getAllOrders = function() 
{
  return new Promise((resolve,reject) => 
  {
    OrdersModel.find({}, function (err, data) 
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

exports.getOrderbyid = (id) => {
  return new Promise((resolve,reject) => {
    OrdersModel.findById(id, function(err, data)
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


exports.creatOrder = (obj) => {
  return new Promise((resolve,reject)=> 
  {
    
        let order= new OrdersModel(
        {
            Seller_id: obj.Seller_id,
            User_id: obj.User_id,
            DateReturn: obj.DateReturn,
            Price: obj.Price,
            Delivery: obj.Delivery,
            status_order:obj.status_order
        })

        order.save(function(err)
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

exports.updateOrder = (id, obj) => 
{
  return new Promise(resolve => 
    {
      OrdersModel.findByIdAndUpdate(id,
        {

            eller_id: obj.Seller_id,
            User_id: obj.User_id,
            DateReturn: obj.DateReturn,
            Price: obj.Price,
            Delivery: obj.Delivery,
            status_order:obj.status_order

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


exports. deleteOrder = (id) => {
  return new Promise((resolve ,reject)=> {

    OrdersModel.findByIdAndDelete(id,function(err) 
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




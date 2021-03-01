const User_details=require('../models/users')
let ejs = require('ejs')


const add_detail= async(req,res)=>{
   console.log(req.body)
   var obj = new User_details(req.body);
   obj.save()
   .then((data)=>{
       console.log(data)
       res.send("User inseted Successfully!")
   })
   .catch((err)=>{
       console.log(err)
       res.send(err.message)
   })
}

const all_data= async(req,res)=>{
   console.log("api is working...")
   User_details.find({})
   .then((all_data)=>{
       if(all_data.length){
           console.log(all_data)
           return res.render('index.ejs', {data: all_data})        //    res.send(all_data)
       }else{
           res.send("no found data.........")
       }
   })
   .catch((err)=>{
       console.log(err)
   })
}


const single_data= async(req,res)=>{
User_details.findOne(req.params.id)
   .then((datas)=>{
       if(datas){
           console.log(datas)
        //    res.send(datas)
           return res.render('single.ejs', {data: datas})        //    res.send(all_data)
       }else{
           res.send("no found data of this id.........")
       }
   })
   .catch((err)=>{
       console.log(err)
   })
}
   

module.exports={
   add_detail,
   all_data,
   single_data
}
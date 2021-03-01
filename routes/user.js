const express=require('express')
const users=require('../controller/user')
const router=express()

router.post('/add_detail', users.add_detail)
router.get('/all_data', users.all_data)
<<<<<<< HEAD
router.get('/data', users.single_data)
=======
router.get('/data/:id', users.single_data)
>>>>>>> 714f341353423d1fc544720d684141801c9c4a1f
module.exports={
   router
}

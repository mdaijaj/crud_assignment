const express=require('express')
const users=require('../controller/user')
const router=express()

router.post('/add_detail', users.add_detail)
router.get('/all_data', users.all_data)
router.get('/data', users.single_data)
module.exports={
   router
}

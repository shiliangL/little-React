const mongoose = require('mongoose')
const express = require('express')
const DB_URL = 'mongodb://127.0.0.1:27017/cmm'
//链接数据库
mongoose.connect(DB_URL)
mongoose.connection.on('connected',()=>{
  console.log('数据库链接成功')
})

const Users = mongoose.model('user', new mongoose.Schema({
  name: { type: String, require: true},
  age: { type: Number, require: true }
}))

// 新增
// Users.create({
//   name:'shiliangl',
//   age: 18
// },(err,doc)=>{
//   if (!err) console.log(doc)
// })


const app = express()

app.get('/',(req,res)=>{
  // res.send('<h1> Hellow World</h1>')
  Users.find({},(err,doc)=>{
    return res.json(doc)
  })
})
app.listen(3001,()=>{
  console.log('服务器开启')
})
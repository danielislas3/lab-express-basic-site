const express = require('express')
const app= express()

app.use(express.static('public'));


app.get('/about',(req,res)=>{
  res.sendFile()
})
app.get('/home',(req,res)=>{
  res.sendFile(__dirname+'/')
})
app.get('/gallery',(req,res)=>{
  res.sendFile(__dirname+'/views/gallery.html')
})


app.listen(3100,()=>{
  console.log("server on localhost")

})

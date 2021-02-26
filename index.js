const express =require("express")
const mongoose=require("mongoose")
const url ="mongodb://localhost/AlienDBx"

const app=express()


mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection
con.on('open',()=>{
    console.log('connected...')
})

app.use(express.json())


const alienRouter=require('../CURD/routers/aliens')
app.use('/aliens',alienRouter)




app.listen(9000,()=>{
    console.log('serever started')
})
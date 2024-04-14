
import express from 'express'
import dotenv from 'dotenv';
import http from 'http'
import {Server} from 'socket.io'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(cors())

const port = process.env.PORT||5000

const server = http.createServer(app)


const io = new Server(server,{
    cors:{
        origin:"*",
        methods: ["GET","POST"]
    }
})

io.on('connection',(socket)=>{
    console.log('user is connected')

    socket.on("disconnect",()=>{
        console.log("user is disconnected")
    })
})



server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})










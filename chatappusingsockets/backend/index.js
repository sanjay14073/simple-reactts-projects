import express from 'express';
const app=express()
import {createServer} from 'http';
const server=createServer(app)
import { Server } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import { db } from './db.js';
const io=new Server(server,{
    cors: {
      origin: 'http://127.0.0.1:5173', 
      methods: ['GET', 'POST'],
    }}
    )

app.use(cors())
app.get('/',(req,res)=>{
    res.status(200).json({"message":"working"})
})

//Fetch initial messages
app.get('/messages',async(req,res)=>{
    try{
        let result = await db.query('SELECT message FROM chats');
        let messages = result.rows;
        res.json(messages);

    }catch(e){
        console.log(e);
        res.status(400).json({"message":"something went wrong"});
    }
})

io.on('connection',(socket)=>{
    console.log('user is connected');
    socket.on('dispatchMessage',async (data)=>{
        let uuid = uuidv4();
        let content=data.content
        console.log(content);
        try {
            let q1=`insert into chats(uuid,message) values ($1,$2)`;
            let d=[uuid,content];
            let response = await db.query(q1,d);
            console.log(response);
            let result = await db.query('SELECT message FROM chats');
            let messages = result.rows;
            console.log(messages);
            io.emit('gettingMessage', messages);
        } catch (error) {
            console.error('Error inserting or retrieving messages:', error);
        }
    })
})
const PORT=process.env.PORT||3000
server.listen(PORT,()=>{
    console.log("server started");
})
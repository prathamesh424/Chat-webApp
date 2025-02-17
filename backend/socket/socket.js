import { Server } from "socket.io";
import express from 'express';
import http from 'http';
 

const app = express() ;
const server = http.createServer(app)
const io = new Server(server , {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET" , "POST"],
    },
});

const userSocketMap = {} ;

export const getReceiverId = (receiverId) => {
    return userSocketMap[receiverId];
}

io.on('connection' , (socket)  => {
    console.log("a user connected" , socket.id);
    const userId = socket.handshake.query.userId ;

    if (userId != "undefined") userSocketMap[userId] = socket.io ;

    io.emit("getOnlineUsers" , Object.keys(userSocketMap));  

    socket.on("disconnect" , () => {
        console.log("user is disconnected")
        delete userSocketMap[userId] ;
        io.emit("getOnlineUsers" , Object.keys(userSocketMap));  

    });
})

export {app , io , server}; 
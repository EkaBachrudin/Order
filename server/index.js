import express from "express";
import {PORT} from './config/variables.js'
import cors from 'cors'
import http from 'http'
// import { Server } from 'socket.io';
import {Server, Socket} from 'socket.io';
// import './config/sockets'
import './config/db.js'

// import orderRouter from './controllers/order'
import CustomerRoute from './routes/CustomerRoute.js'
import MenuRoute from './routes/MenuRoute.js'
import OrderRoute from './routes/OrderRoute.js'
import ReportRoute from './routes/ReportRoute.js'
import TableRoute from './routes/TableRoute.js'

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors:{
    cors: {
      origin: "http://localhost:3000/order"
    }
  }
});

io.on('connection', (socket) => {
  console.log('A user is connected');

  socket.on('message', (message) => {
    console.log(`message from ${socket.id} : ${message}`);
  })

  socket.on('disconnect', () => {
    console.log(`socket ${socket.id} disconnected`);
  })
})

export {io};


app.use(express.json())
app.use(cors())
// app.use('/orders', orderRouter)
app.use(
  CustomerRoute,
  MenuRoute,
  OrderRoute,
  ReportRoute,
  TableRoute
  );

  app.use(cors({
      credentials: true,
      origin: 'http://localhost:3000'
  }));


server.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
})
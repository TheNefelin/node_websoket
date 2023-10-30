import express from "express"
import logger from "morgan"
import dotenv from "dotenv"

import { Server } from "socket.io"
import { createServer } from "node:http"

dotenv.config()
const port = process.env.PORT || 3000

const app = express()
const server = createServer(app)
const io = new Server(server, {
  connectionStateRecovery: {}
})

io.on("connection", (socket) => {
  console.log("user connected")

  socket.on("disconnect", () => {
    console.log("user disconnected")
  })

  socket.on("msge", (msg) => {
    io.emit("msge", msg)
  })
})

app.use(logger("dev"))

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html")
})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
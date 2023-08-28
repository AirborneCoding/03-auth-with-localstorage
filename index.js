require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()

const path = require("path")

const authRouter = require("./routes/user.routes")

const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

app.use(express.json())

app.use(express.static(path.resolve(__dirname, "./public/dist")))
app.use(express.json())

app.use("/api/v1/auth", authRouter)

app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname, './public/dist', 'index.html'));
});


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000

const mongoose = require("mongoose")
const connectDB = (url) => {
 return mongoose.connect(url)
}

const start = async () => {
 try {
  await connectDB(process.env.MONGO_URI)
  app.listen(PORT, () => console.log("server is running on port", PORT))
 } catch (error) {
  console.log("something went wrong", error);
 }
}

start()

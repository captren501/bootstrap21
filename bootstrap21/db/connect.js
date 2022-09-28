require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = () => {
  return mongoose.connect("mongodb+srv://elangford:Clw0iwCFqavDmKpU@taskmanger2.jngthg5.mongodb.net/Tasker?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }).then(()=>{console.log('CONNECTED TO MONGODB SUCCESSFUL')})
}

module.exports = connectDB
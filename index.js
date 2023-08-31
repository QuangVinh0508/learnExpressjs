
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const userRouter = require('./routes/users')

dotenv.config();
app.use(cors());

const port = process.env.PORT || 3000;

// Connect DB
mongoose.connect('mongodb+srv://vinhdz:RJpoGJoR5DovXdEt@cluster0.1yxfygc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
}).catch(err => console.log('Connect fail', err));

app.use(express.json({extended: true}));

app.get('/', (req, res) => {
  res.send('API Running')
})

//Router
app.use('/api/users', userRouter)

app.listen(port, () => {
  console.log(`Server Up and running localhost: ${port}`)
})
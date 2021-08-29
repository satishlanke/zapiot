const express = require('express');
const mongoose =require('mongoose');


const middleware = require('./middleware');

const authMethods = require('./loginRegister')
const jobsMethods  = require('./JobMethods')
// const Jobs = require("./models")

const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/zapiot',{
    useNewUrlParser:true,useCreateIndex:true,
    useUnifiedTopology: true
}).then(
    ()=>console.log("'DB CONNECTED successfully")
)
const app = express();

app.use(express.json())

app.use(cors({origin:"*"}))


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.post('/register',authMethods.register)
app.post('/login',authMethods.login)
app.get('/myprofile',middleware,authMethods.toGetUserloggedin)

app.get("/jobs",jobsMethods.GetAllJobs )
app.get("/jobs/:id",jobsMethods.GetJobsbyId )

app.post("/jobs",jobsMethods.InsertJobData)  









app.listen(5000,()=>{
    console.log('Server Listening ')
})
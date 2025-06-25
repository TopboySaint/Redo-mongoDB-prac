const express = require('express')
const app = express()
const port = 5090




app.get("/signup", (req, res)=>{
    res.send('Welcome to landing page')
})

app.get("/dashboard", (req, res)=>{
    res.send('Welcome to dashboard')
})

app.get("/signin", (req, res)=>{
    res.send('Welcome to signin page')
})


const students = [
    {id: 1,  name: "Ade", dept: "Science", },
    {id: 2,  name: "Ayo", dept: "Art", },
    {id: 3,  name: "Akin", dept: "Tech", },
    {id: 4,  name: "Marve", dept: "Material", },
    {id: 5,  name: "Salam", dept: "Mech", },
    {id: 6,  name: "Musty", dept: "Cyber", }
]

app.get("/", (req, res)=>{
    res.send(students)
})












app.listen(port, ()=>{
    console.log('server starts');
    
})
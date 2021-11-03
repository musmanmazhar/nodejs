import express from "express";
const app = express();
const port = process.env.PORT|| 3000
app.get("/karachi",(req,res)=> {
    res.send("welcome back Mr Usman ");
})
app.get("/hello", (req, res) => {
    res.send("hello world server");
})
app.get("/profile", (req, res) => {
    res.send("my profile");
})
app.get("/", (req, res) => {
    res.send("my bio");
})
app.listen(port,()=>
{
    console.log("the port is runnng ")
})

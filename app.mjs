import express from "express";
const app = express();
app.get("/karachi",(req,res)=> {
    res.send("welcome back Mr Usman ");
})
app.get("/hello", (req, res) => {
    res.send("hello world server");
})
app.get("/profile", (req, res) => {
    res.send("my profile");
})
app.get("/about", (req, res) => {
    res.send("my bio");
})
app.listen(3000,()=>
{
    console.log("the port is runnng ")
})
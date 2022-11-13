const express = require("express");
const app = express();
const path = require("path")

// port
const port = process.env.PORT || 80

// server listen part 
app.listen(port, ()=>{
    console.log("Started listening on port:", port)
})

// main site
app.get("/", async (req, res)=>{
    res.sendFile(path.join(__dirname, "/web/index.html"))
})

// a subsite
app.get("/status", async (req, res)=>{
    res.sendFile(path.join(__dirname, "/web/subsites/status.html"))
})

// again a subsite
app.get("/internalstatus", async (req, res)=>{
    res.sendStatus(200)
})


app.get("*", (req, res)=>{
    res.json({
    "message":"Error 404"
    })
})

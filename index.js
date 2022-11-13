const express = require("express");
const app = express();
const path = require("path")

const port = process.env.PORT || 80

app.listen(port, ()=>{
    console.log("Started listening on port:", port)
})

// main site
app.get("/", async (req, res)=>{
    res.sendFile(path.join(__dirname, "/web/index.html"))
})

app.get("/status", async (req, res)=>{
    res.sendFile(path.join(__dirname, "/web/subsites/status.html"))
})

// internal status
app.get("/internalstatus", async (req, res)=>{
    res.sendStatus(200)
})

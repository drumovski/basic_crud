const express = require("express")
const app = express()
const port = 3000
const postRouter = require("./routes/post_routes")
// get route to get hello world
app.get("/", (req, res)=>{
    res.json({message: "Hello World"})
})
app.use("/posts", postRouter)
app.listen(port, ()=> console.log(`server started on port ${port}`))
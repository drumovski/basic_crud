const express = require("express")
const app = express()
const postRouter = require("./routes/post_routes")
const port = 3000
// get route to sent hello world response

app.get("/", (req, res)=>{
    res.json({message: "Hello World"})
})

// /posts
// when there are any /posts/* requests direct them to post_routes file
app.use("/posts", postRouter)


app.listen(port, () =>  console.log(`server started on port ${port}`))


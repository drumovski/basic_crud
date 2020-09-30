const express = require("express")
const router = express.Router()
const {getPosts, getPost, makePost, changePost} = require("../controllers/post_controller")



// get all posts
// /posts/posts
router.get("/", getPosts)

// get a particular post
router.get("/:id", getPost )

// add a post
router.post("/", makePost)

router.put("/:id", changePost)

// router.get
// router.post
module.exports = router
const {getAllPosts, getPostById, addPost, updatePost } = require("../util/utilities")
const getPosts = (req,res) => {

    // util file would be the best place to have your logc + helper function, as it can be accessed by both tester and controller
    res.send(getAllPosts(req))
}


const getPost = (req, res) => {
    let post = getPostById(req)
    if (post) res.send(post)
    else{
        res.status(404)
        res.send(req.error)
    }
}

const makePost = (req, res) =>{
    let post = addPost(req)
    if(post){
        res.status(201)
        res.send(post)
    }else{
        res.status(500)
        res.send(req.error)
    }
}

const changePost = (req,res) =>{
    let post = updatePost(req)
    if(post){
        res.status(200)
        res.send(post)
    }else{
        res.status(500)
        res.send(req.error)
    }
}
module.exports = {
    getPosts,
    getPost,
    makePost,
    changePost
}
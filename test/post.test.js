const expect = require("expect")
// testing unit functions (defined in utilities.js)
const {getAllPosts,loadData,getDataFileRelativeToApp, getPostById, addPost,updatePost } = require("../server/util/utilities")
const fs= require("fs")
// require test data file
const testdataFile = "../server/data/blog_posts.test.json"
const testDataFileForWrite = getDataFileRelativeToApp(testdataFile)

// setup a test data to begin with
beforeEach(() => {
    setupData()
})

describe("get All posts", () => {
    test("should get a post if one exists",() =>{
        expect(Object.keys(getAllPosts({})).length).toBe(1)
    })
    test("user name of the first post must be Luke",() =>{
        expect(getAllPosts({})["1"].username).toBe("Luke")
    })
})

describe("getPostById", () =>{
    const req = {
        params:{
            id: "1"
        }
    }
    test("user of post with id 1 should be Luke", () =>{
        expect(getPostById(req).username).toBe("Luke")
    })
})

describe("addPost", () => {
        test("should add a post", () => {
        // define a req object with expected structure
            const req = {
            body: {
            title: "Another post",
            username: "tester",
            content: "This is another blog post!",
            category: ""
            }
        }
        let post = addPost(req)
        console.log(post)
        expect(post.title).toBe(req.body.title)
    })
})

describe("updatePost", () => {
        test("should update a post", () => {
        // define a req object with expected structure
            const req = {
            params:{
                id: "1"
            },
            body: {
            title: "Updated post",
            username: "tester",
            content: "This is another updated post!",
            category: ""
            }
        }
        let post = updatePost(req)
        expect(post.title).toBe(req.body.title)
    })
})

function setupData() {
	let testPostData = {}
	let testPost = {}
	let date = Date.now()
	testPost.title = "Test post 1"
	testPost.username = "Luke"
	testPost.create_date = date
	testPost.modified_date = date
	testPost.content = "This is the first test post"
	testPost.category = ""
	testPostData["1"] = testPost

	fs.writeFileSync(testDataFileForWrite, JSON.stringify(testPostData))
	loadData(testDataFileForWrite)
}
// function setupData(){
//     let testPostData = {}
//     let testPost = {}
//     let date = Date.now()
//     testPost.title = "Test Post 1"
//     testPost.username = "Luke"
//     testPost.create_date = date
//     testPost.modified_date = date
//     testPostData["1"] = testPost

//     fs.writeFileSync(testdataFileForWrite, JSON.stringify(testPostData))
//     loadData(testdataFileForWrite)
// }

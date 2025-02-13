module.exports = {
    index: (req, res) => {
        console.log("Rendering index page...");
        res.render('admin/index');
    },

    getPosts: (req, res) => {
        res.send("All posts");
    },

    submitPosts: (req, res) => {
        res.send("Post submitted");
    },

    createPost: (req, res) => {
        res.render('admin/posts/create');
    }
};
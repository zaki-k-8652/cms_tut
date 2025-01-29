module.exports = {
    index: (req, res) => {
        console.log("Rendering index page...");
        res.render('default/index');
    }
}
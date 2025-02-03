module.exports = {
    index: (req, res) => {
        console.log("Rendering index page...");
        res.render('default/index');
    },

    loginGet: (req, res) => {
        res.render('default/login');
    },

    loginPost: (req, res) => {
        res.send("Login Post...");
    },

    registerGet: (req, res) => {
        res.render('default/register');
    },

    registerPost: (req, res) => {
        res.send("Register Post...");
    }
};
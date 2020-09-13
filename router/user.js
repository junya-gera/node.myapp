// expressからRouterというクラスを作る
const router = require("express").Router();

// URLに関わらない
router.use((req, res, next) => {
    console.log((new Date()).toISOString());
    next();
});

// /user/
router.get("/", (req, res) => {
    res.send("/");
});

// /user/about
router.get("/about", (req, res) => {
    res.send("/about");
});

module.exports = router;

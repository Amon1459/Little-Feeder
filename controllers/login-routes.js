const router = require("express").Router();
const dbconn = require("../config/connection");
const { PUB, AAA } = require("../utils/auth");

router.get("/", PUB, (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/article");
  } else {
    res.render("login");
  }
});

module.exports = router;

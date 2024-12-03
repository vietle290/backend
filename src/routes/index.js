const aboutsRouter = require("./abouts");
const siteRouter = require("./site");
const courseRouter = require("./courses");
const meRouter = require("./me");

function route(app) {


  app.post("/search", (req, res) => {
    console.log("req.body", req.body);
    res.send("");
  });

  app.use("/about", aboutsRouter);
  app.use("/courses", courseRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);
}

module.exports = route;

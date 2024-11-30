const aboutsRouter = require("./abouts");
const siteRouter = require("./site");

function route(app) {


  app.post("/search", (req, res) => {
    console.log("req.body", req.body);
    res.send("");
  });

  app.use("/about", aboutsRouter);
  app.use("/", siteRouter);
}

module.exports = route;

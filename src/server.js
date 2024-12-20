const express = require("express");
const path = require("path");
var morgan = require("morgan");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const Handlebars = require("handlebars");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db"); 

const sort = require("./app/middlewares/SortMiddleware")

// Connect DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(sort);

// HTTP logger
app.use(morgan("combined"));

// Remplate engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    // helpers function to handlebars
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortBtn = field === sort.column ? sort.type : "default";
        const icons = {
          default: "fa-solid fa-sort",
          asc: "fa-solid fa-arrow-down-short-wide",
          desc: "fa-solid fa-arrow-down-wide-short",
        };

        const types = {
          default: "desc",
          asc: "desc",
          desc: "asc",
        }
        const iconsType = icons[sortBtn];
        const sortTypes = types[sortBtn];
        const html = `<a href="?_sort&column=${field}&type=${sortTypes}"><span class="${iconsType}"></span></a>`;
        return new Handlebars.SafeString(html);
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

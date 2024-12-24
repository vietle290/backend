const Handlebars = require("handlebars");

module.exports = {
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
        // add handlebar escape expression for safe string
        const address = Handlebars.escapeExpression(`?_sort&column=${field}&type=${sortTypes}`);
        const html = `<a href="${address}"><span class="${iconsType}"></span></a>`;
        return new Handlebars.SafeString(html);
      },
    }
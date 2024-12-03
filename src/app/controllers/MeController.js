const Course = require("../models/Course");
const { multipleMongoseToObject } = require("../../util/mongoose");
class MeController {
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render("me/stored-courses", {
                    courses: multipleMongoseToObject(courses),
                });
            })
            .catch(next);
    }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new MeController();

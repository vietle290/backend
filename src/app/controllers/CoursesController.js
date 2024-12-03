const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CoursesController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //Navigate to create a new Courses
  create(req, res, next) {
    res.render("courses/create");
  }

  //Post create a new Courses
  store(req, res, next) {
    const formData = req.body;
    formData.image = "https://img.youtube.com/vi/" + formData.videoId + "/sddefault.jpg";
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  // search(req, res) {
  //   res.render("search");
  // }
}

module.exports = new CoursesController();

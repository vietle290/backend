const Course = require('../models/Course');
class SiteController {
    async index(req, res) {
        try {
            // Use await to wait for the result of the find query
            const courses = await Course.find({});
            res.json(courses); // Send the courses as JSON response
        } catch (err) {
            // Handle any errors that occur during the query
            res.status(400).json({ error: "ERROR", message: err.message });
        }
    }
    

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
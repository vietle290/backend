const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const courseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    videoId: { type: String, required: true },
    slug: { type: String, slug: "name" },
}, {
    timestamps: true 
});

//Custom query helpers
courseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty("_sort")) {
        const isValid = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValid ? req.query.type : "desc",
        });
    }
    return this;
}

// Add plugin
mongoose.plugin(slug);
courseSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model("Course", courseSchema);
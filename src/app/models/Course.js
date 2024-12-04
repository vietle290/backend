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

// Add plugin
mongoose.plugin(slug);
courseSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model("Course", courseSchema);
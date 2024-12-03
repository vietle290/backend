const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const courseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    videoId: { type: String, required: true },
    slug: { type: String, slug: "name" },
}, {
    timestamps: true 
});

module.exports = mongoose.model("Course", courseSchema);
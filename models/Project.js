const {model, Schema, models} = require("mongoose");

const ProjectSchema = new Schema({

    Title: {type:String, required:true},
    Description: String,
    Price: {type: Number, required: true},
});

export const Project = models.Project || model('Project', ProjectSchema);
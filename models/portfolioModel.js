const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    caption: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
});

const aboutSchema = new mongoose.Schema({
    lottieURL: {
        type: String,
        require: true
    },
    description1: {
        type: String,
        require: true
    },
    description2: {
        type: String,
        require: true
    },
    skills: {
        type: Array,
        require: true
    },
});

const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    period: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
});
const projectSchema = new mongoose.Schema({
    technologies: {
        type: Array,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
});
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
});

module.exports = {
    Intro: mongoose.model("intros", introSchema),
    About: mongoose.model("abouts", aboutSchema),
    Experience: mongoose.model("experiences", experienceSchema),
    Project: mongoose.model("projects", projectSchema),
    Contact: mongoose.model("contact", contactSchema),
};
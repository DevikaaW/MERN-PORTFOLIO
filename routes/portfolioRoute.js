const router = require('express').Router();
const { Intro, About, Experience, Project, Contact } = require('../models/portfolioModel');

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const experiences = await Experience.find();
        const projects = await Project.find();
        const contact = await Contact.find();

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            experiences: experiences,
            projects: projects,
            contact: contact[0],
        })
    }
    catch (error) {
        res.status(200).send(error);
    }
});

module.exports = router;
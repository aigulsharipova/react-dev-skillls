// TODO: require yhe skill model
const Skill = require('../models/skill');
async function index(req, res) {
   try {
       const skills = await Skill.find({});
       res.status(200).json(skills); // send skills as JSON data as an HTTP response
   } catch (error) {
       console.log(error);
       res.status(400).json({ error: 'something went wrong' });
   }
}
async function create(req, res) {
    try {
        await Skill.create(req.body);
        res.status(201).json({ msg: 'skill created successfully' });
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}
module.exports = {
    index,
    create,
};



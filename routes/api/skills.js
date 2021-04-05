const express = require('express');
const router = express.Router();
const skillsCtrl = require('../../controllers/skills');

router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create);

module.exports = router;
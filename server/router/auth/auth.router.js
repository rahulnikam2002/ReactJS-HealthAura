const router = require("express").Router();
const controller = require('../../controllers/auth/auth.controller');


router.post('/signup', controller.signupUser)

module.exports = router;
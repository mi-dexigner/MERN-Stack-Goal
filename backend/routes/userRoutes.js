const express = require("express");
const router = express.Router();
const {registerUser,loginUser,getMe} = require('../controllers/userControllers.js')

router.post('/',registerUser);
router.post('/login',loginUser);
router.get('/me',getMe);
// router.route('/:id').delete(deleteGoal).put(updateGoal);

module.exports = router;
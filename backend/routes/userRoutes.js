const express = require("express");
const router = express.Router();
const {registerUser,loginUser,getMe} = require('../controllers/userControllers.js')
const { protect } = require('../middleware/authMiddleware')

router.post('/',registerUser);
router.post('/login',loginUser);
router.get('/me',protect,getMe);
// router.route('/:id').delete(deleteGoal).put(updateGoal);

module.exports = router;
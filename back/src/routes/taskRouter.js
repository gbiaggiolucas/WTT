const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/store/task', userController.storeTask);
router.post('/login', userController.loginTask);

module.exports = router;
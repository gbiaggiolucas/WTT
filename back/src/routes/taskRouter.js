const { Router } = require('express');
const router = Router();

const { storeUser, login } = require('../controller/taskController');

router.post('/store/task', storeUser);
router.post('/login', login);

module.exports = router;
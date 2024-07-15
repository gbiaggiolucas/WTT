const { Router } = require('express');
const router = Router();

const { storeUser, login } = require('../controller/usersController');

router.post('/store/task', storeUser);
router.post('/login', login);

module.exports = router;
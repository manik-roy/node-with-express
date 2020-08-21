const router = require('express').Router();
const { getAllUSer, isAuth, createUSer, userRoles, deleteUSer, login } = require('../controllers/userController');

router.get('/', getAllUSer);

router.post('/', isAuth, createUSer);

router.delete('/:id', isAuth, userRoles, deleteUSer);

router.post('/login', login);

module.exports = router;

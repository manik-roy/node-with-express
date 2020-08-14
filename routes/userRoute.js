const router = require('express').Router();
const { getAllUSer, isAuth, createUSer, userRoles, deleteUSer } = require('../controllers/userController');

router.get('/', getAllUSer);

router.post('/', isAuth, createUSer);

router.delete('/:id', isAuth, userRoles, deleteUSer);

module.exports = router;

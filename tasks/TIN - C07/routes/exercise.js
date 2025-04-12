const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
  await userController.getAllUsers(req, res);
});

router.post('/', async (req, res) => {
  await userController.createUser(req, res);
});

router.post('/:id', async (req, res) => {
  await userController.deleteUser(req, res);
});

module.exports = router;
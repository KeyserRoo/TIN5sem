const userModel = require('../models/userModel');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAll();
      res.status(200).render('exercise', { users });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  createUser: async (req, res) => {
    try {
      await userModel.createUser(req.body.username);
      res.redirect('/exercise');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteUser: async (req, res) => {
    try {
      await userModel.deleteById(req.params.id);
      res.redirect('/exercise');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
};

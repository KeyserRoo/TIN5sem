const db = require('../db');

class UserModel {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  }

  static async createUser(name) {
    const [result] = await db.query(
      'INSERT INTO users (name) VALUES (?)',
      [name]
    );
    return result.insertId;
  }

  static async deleteById(id) {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
  }
}

module.exports = UserModel;
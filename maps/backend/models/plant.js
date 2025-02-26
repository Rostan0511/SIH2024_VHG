const pool = require('../config/db');

const Plant = {
  getAll: async () => {
    const [rows] = await pool.query(`
      SELECT id, name, latitude, longitude, description 
      FROM plants
    `);
    return rows;
  },

  create: async (plantData) => {
    const [result] = await pool.query('INSERT INTO plants SET ?', plantData);
    return result.insertId;
  }
};

module.exports = Plant;
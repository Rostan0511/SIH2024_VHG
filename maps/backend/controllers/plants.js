const Plant = require('../models/plant');
exports.getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.getAll();
    res.json(plants);
  } catch (error) {
    console.error('Error fetching plants:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createPlant = async (req, res) => {
  try {
    const newPlantId = await Plant.create(req.body);
    res.status(201).json({ id: newPlantId, ...req.body });
  } catch (error) {
    console.error('Error creating plant:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
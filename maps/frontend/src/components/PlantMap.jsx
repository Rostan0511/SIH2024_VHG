import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { CircularProgress, Alert, Box } from '@mui/material';

const PlantMarker = ({ plant, onClick }) => {
  return (
    <mesh position={[plant.longitude, plant.latitude, 0]} onClick={() => onClick(plant)}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const PlantMapR3F = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/plants');
        setPlants(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        Error loading plants: {error}
      </Alert>
    );
  }

  return (
    <Canvas style={{ height: '80vh', width: '100%' }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <OrbitControls />

      {plants.map((plant) => (
        <PlantMarker key={plant.id} plant={plant} onClick={setSelectedPlant} />
      ))}

      {selectedPlant && (
        <Html position={[selectedPlant.longitude, selectedPlant.latitude, 0.5]}>
          <div style={{ background: 'white', padding: '8px', borderRadius: '8px' }}>
            <h3>{selectedPlant.name}</h3>
            <p>{selectedPlant.description}</p>
          </div>
        </Html>
      )}
    </Canvas>
  );
};

export default PlantMapR3F;

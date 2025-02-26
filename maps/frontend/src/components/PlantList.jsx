import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

const PlantList = ({ plants }) => {
  if (!plants || plants.length === 0) {
    return (
      <Paper elevation={3} sx={{ p: 2, height: '80vh', overflow: 'auto' }}>
        <Typography variant="h6" gutterBottom>
          No plants found.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 2, height: '80vh', overflow: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Plant List
      </Typography>
      <List>
        {plants.map((plant) => (
          <ListItem key={plant.id}>
            <ListItemText
              primary={plant.name}
              secondary={`Lat: ${plant.latitude}, Lng: ${plant.longitude}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default PlantList;
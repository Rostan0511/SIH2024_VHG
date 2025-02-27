import { Grid } from '@mui/material';
import PlantMap from './PlantMap';
import PlantList from './PlantList';

const MainLayout = ({ plants }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        {/* Pass the plants prop here too */}
        <PlantMap plants={plants} />
      </Grid>
      <Grid item xs={12} md={4}>
        <PlantList plants={plants} />
      </Grid>
    </Grid>
  );
};

export default MainLayout;

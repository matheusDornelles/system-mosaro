// index.ts
import express from 'express';
import bodyParser from 'body-parser';
import { MapMarker } from './types';
import { addMarker, getMarkers } from './markers';
import sequelize from './database/config';
import  Marker from './database/models/Marker';

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Synchronize Sequelize models with the database
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Endpoint to add a marker
app.post('/api/markers', async (req, res) => {
  const newMarker: MapMarker = req.body;
  try {
    const addedMarker = await addMarker(newMarker);
    res.json(addedMarker);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to get all markers
app.get('/api/markers', async (req, res) => {
  try {
    const markers = await getMarkers();
    res.json(markers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Ensure the script to populate markers is run asynchronously
const populateMarkers = async () => {
    try {
      await sequelize.sync(); // Ensure tables are created
      const markersCount = await Marker.count();
  
      if (markersCount === 0) {
        console.log('Populating markers...');
        // Run your population script asynchronously
        await require('./scripts/populateMarkers');
        console.log('Markers populated successfully.');
      }
    } catch (error) {
      console.error('Error populating markers:', error);
    } finally {
      // Start the server after the population is complete
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    }
  };
  
populateMarkers();

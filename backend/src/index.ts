import express, { Application } from 'express';
import cors from 'cors'; // Import the cors middleware
import markersRouter from './routes/markers';
import sequelize from './database/config';
import  Marker from './database/models/Marker';

const app: Application = express();
const PORT: number = 3002;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Use the cors middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Configuração de rotas
app.use('/api', markersRouter);

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
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  }
};

populateMarkers();

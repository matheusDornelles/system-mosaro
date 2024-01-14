import  Marker from '../database/models/Marker';

const generateRandomCoordinates = (min: number, max: number) => {
  return min + Math.random() * (max - min);
};

const populateMarkers = async () => {
  try {
    // Limite geográfico aproximado de Alagoas
    const alagoasBounds = {
      north: -9.5000,
      south: -10.0000,
      east: -35.0000,
      west: -36.0000,
    };

    // Drop and recreate the table (optional)
    await Marker.sync({ force: true });

    const markers = Array.from({ length: 100 }, (_, index) => {
      return {
        lat: generateRandomCoordinates(alagoasBounds.south, alagoasBounds.north),
        lng: generateRandomCoordinates(alagoasBounds.west, alagoasBounds.east),
        //title: `Random Marker ${index + 1}`,
      };
    });

    await Marker.bulkCreate(markers);
    console.log('100 markers created successfully.');
  } catch (error) {
    console.error('Error populating markers:', error);
  } finally {
    // Exit the script
    process.exit();
  }
};

// Call the function to populate markers
populateMarkers();

import * as faker from 'faker';
import Marker from '../database/models/Markers';

async function populateDatabase() {
  try {
    for (let i = 0; i < 100000; i++) {
      await Marker.create({
        position: {
          lat: parseFloat(faker.address.latitude()),
          lng: parseFloat(faker.address.longitude()),
        },
        title: faker.address.streetName(),
      });
    }
    console.log('Dados populados com sucesso!');
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  } finally {
    // Certifique-se de fechar a conexão com o banco de dados
    await Marker.sequelize.close();
  }
}

// Chame a função para popular o banco de dados
populateDatabase();

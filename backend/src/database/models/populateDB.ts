import { DataTypes } from "sequelize";
import Marker from "./Markers";

// Função para popular o banco de dados
async function popularBancoDeDados() {
  try {
    // Crie uma instância do Marker
    const marker1 = await Marker.create({
      id : 1,
      position: { lat: 40.7128, lng: -74.0060 }, // Exemplo de coordenadas para Nova Iorque
    });

    const marker2 = await Marker.create({
      id : 2,
      position: { lat: 34.0522, lng: -118.2437 }, // Exemplo de coordenadas para Los Angeles
    });

    // Você pode criar e salvar quantos marcadores quiser dessa maneira

    console.log('Banco de dados populado com sucesso!');
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  }
}

// Chame a função para popular o banco de dados
popularBancoDeDados();
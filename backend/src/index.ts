import express, { Application } from 'express';
import markersRouter from './routes/markers';
import sequelize from './database/config';

const app: Application = express();
const PORT: number = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Configuração de rotas
app.use('/api', markersRouter);

// Sincroniza o modelo com o banco de dados e inicia o servidor
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});
sequelize.authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida.');
  })
  .catch((error) => {
    console.error('Erro ao conectar:', error);
  });
export default sequelize;

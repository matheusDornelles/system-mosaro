import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('iluminacao', 'username', 'password', {
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

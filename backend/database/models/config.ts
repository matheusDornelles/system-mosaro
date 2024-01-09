import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
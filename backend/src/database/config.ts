import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;

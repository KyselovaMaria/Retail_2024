import { Sequelize } from 'sequelize-typescript';
import models from '@/models';
import config from '@/config/variables';

const sequelize = new Sequelize(config.RETAIL_DB_CONN_URI, {models})

export default sequelize
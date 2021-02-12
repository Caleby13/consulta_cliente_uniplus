import { resolve } from 'path';
import { Sequelize } from 'sequelize-typescript';

import * as databaseConfig from '../config/database';

const sequelize = new Sequelize(databaseConfig);
sequelize.addModels([resolve(__dirname, '..', 'app', 'models')]);

export default sequelize;

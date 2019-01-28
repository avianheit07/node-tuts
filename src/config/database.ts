import * as  Sequelize from 'sequelize';

const database: string = 'tutorial';
const user    : string = 'nodetuts2';
const password: string = 'nodetuts2';
const host    : string = '192.168.254.103';

export const sequelize = new Sequelize(database, user, password, {
  dialect: 'mysql', port: 3306, host: host
});

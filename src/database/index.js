import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Student from '../app/models/Student';
import DiscountPlan from '../app/models/DiscountPlan';
import Enrolment from '../app/models/Enrolment';

const models = [User, Student, DiscountPlan, Enrolment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();

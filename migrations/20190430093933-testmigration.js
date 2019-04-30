'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('testmigration',{
    name:Sequelize.STRING,
    last:Sequelize.STRING
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('testmigration')
  }
};

'use strict';
//Export
/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('receipts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      }
    });
  
    // Add indexes.
    await queryInterface.addIndex('receipts', ['id']);
  },
  /**
  * Migarte down.
  * @param {object} queryInterface Query interface.
  * @param {object} Sequelize Sequelize class.
  */
  async down(queryInterface) {
    
    // Remove indexes.
    await queryInterface.removeIndex('receipts', ['id']);

    // Drop table.
    await queryInterface.dropTable('receipts');
  }
};

/**
   * Migarte up.
   * @param {object} queryInterface Query interface.
   * @param {object} Sequelize Sequelize class.
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('items', 'picture_id', {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
      })
  },
/**
  * Migarte down.
  * @param {object} queryInterface Query interface.
*/
  down: async (queryInterface) => {
    // Drop colums.
    await queryInterface.removeColumn('items', 'picture_id')
  }
};

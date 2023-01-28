'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert("members", [
    {
      name: 'rendi',gender: 'Male',contact: '0856-4849-2585',address:'Pare, Kediri', createdAt: new Date(), updatedAt: new Date()
    },
    {
      name: 'Laili Nurin Nabila', gender:'Female', contact: '0856-8764-2987',address:'Juwah, Brumbung, Kediri', createdAt: new Date(), updatedAt: new Date()
    },
   ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('members', null, {});
  }
};

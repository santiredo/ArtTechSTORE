const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('arttechstore', 'postgres', '935348536', {
  host: 'localhost',
  dialect: 'postgres', 
})


// const sequelize = new Sequelize('arttechstore', '', '', {
//   host: 'localhost',
//   dialect: 'mysql', 
// })

module.exports = sequelize;

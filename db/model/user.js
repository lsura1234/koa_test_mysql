import Sequelize from 'sequelize'
import connect from '../connect'
export default connect.define('test', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    number: {
      type: Sequelize.INTEGER,
    }
  }, {
    tableName: 'test',
    timestamp: true
  })
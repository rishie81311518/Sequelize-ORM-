const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-orm', 'root', 'Saikiki_2728',{
dialect: 'mysql'
});



const User = sequelize.define('user', {
    user_id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 21
    },
    WithCodeRocks: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
    }
},
{
    freezeTableName: true,
    timestamps: false
});


console.log(sequelize.models.user);
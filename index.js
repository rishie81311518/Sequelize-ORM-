const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

const sequelize = new Sequelize('sequelize-orm', 'root', 'Saikiki_2728',{
dialect: 'mysql'
});



const User = sequelize.define('user', {
    user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4, 6]
        }
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21
    },
    WithCodeRocks: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
{
    freezeTableName: true,
    timestamps: false
});

User.sync({alter: true}).then(() =>{
    // working with our updated table
    return User.create(
    {
        username: 'Frehdubdbdwwbfbif'
    }
);
}).then((data) => {
data.forEach((element) => {
    console.log(element.toJSON());
});
}).catch((err) => {
    console.log(err);
});
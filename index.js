const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-orm', 'root', 'Saikiki_2728',{
dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connection successful! ");
    }).catch((err) => {
        console.log("Error connecting to database!")
    });

    console.log("Another task");
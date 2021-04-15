const express = require('express');
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./rutas')

const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions={
    host:'localhost',
    port:'3306',
    user: 'root',
    password: '',
    database: 'nodecrud'
}

//middlewares ---------------------------------------
app.use(myconn(mysql, dbOptions,'single'))
app.use(express.json());

//routers -------------------------------------------
app.get('/',(req, res)=>{
    res.send('Welcome my APP')
});
app.use('/api', routes);

//Server running ------------------------------------
app.listen(app.get('port'),()=>{
    console.log('Running Server port', app.get('port'));
})
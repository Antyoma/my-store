const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { faker } = require('@faker-js/faker');

const { logErrors, errorHandlres, boomerrorHandlres } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> {
    res.send('Hola, este es mi server en express para una tienda virtual de ropa femenina Matmoda');
});

app.get('/nueva-ruta', (req, res)=> {
    res.send('Hola, esta es una nueva ruta para una tienda virtual de ropa femenina');
});

routerApi(app);

app.use(logErrors);
app.use(boomerrorHandlres);
app.use(errorHandlres);

app.listen(port, () => {
    console.log('Mi puerto es el puerto -> ' + port);
});
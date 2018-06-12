const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    //Convierte un objeto a un JSON valido
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        //leer de un fichero JSOn
        listadoPorHacer = require('../db/data.json');
    }catch (error){
        listadoPorHacer = [];
    }

    //console.log(listadoPorHacer);
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    let retorno = false;
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        retorno = true;
    }
    return retorno;
}

const borrar = (descripcion) => {

    cargarDB();

    //Obtener una nueva lista donde se cumple la condicion
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    let retorno = false;
    if(nuevoListado.length !== listadoPorHacer.length){
        listadoPorHacer = nuevoListado;
        guardarDB();
        retorno = true;
    }
    return retorno;
}

const listar = (completado) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado.toString() === completado.toString());
    return nuevoListado;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    listar
}
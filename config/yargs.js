// const argv ....
//
// comando crear 'Crear un elemento por hacer'
// --description -d
//
// comando actualizar 'Actualizar el estado compleado de una tarea'
// --descripcion -d
// --completado -c true
//
//
// --help

const descripcion = {
    demand:true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const estado = {
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {descripcion})
    .command('actualizar', 'Actualizar el estado compleado de una tarea', {descripcion, completado})
    .command('borrar', 'Borrar una tarea', {descripcion})
    .command('listar', 'Listar tareas', {estado})
    .help() //para documentacion
    .argv;

module.exports = {
    argv
}
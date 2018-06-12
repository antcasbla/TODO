//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

let commando = argv._[0];

switch (commando) {

    case 'crear':
        //console.log('Crear una tarea por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        //console.log('Mostar todas las tareas por hacer');

        let listado;
        if(argv.estado === undefined){
            listado = porHacer.getListado()
        }else{
            listado = porHacer.listar(argv.estado);
        }

        for(let tarea of listado){
            console.log('====Por Hacer===='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================='.green);
        }

        break;

    case 'actualizar':
        //console.log('Actualiza una tarea por hacer');

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

        break;

    default:
        console.log('Comando no es reconocido');
}
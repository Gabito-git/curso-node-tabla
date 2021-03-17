
const argv =  require('yargs')
    .option('b', {
        alias:'base',
        type: 'number',
        demandOption: true,
        desc:'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false,
        desc:'Muestra la tabla en consola'
    })
    .option('h', {
        alias:'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        desc:'Establece un límite para la tabla de multiplicar'
    })
    .check(( argv, options )=> {

            if( isNaN( argv.b ) ){
                    throw 'La base debe ser un número';
            }

            if( typeof argv.l !== 'boolean' ){
                    throw 'listar debe ser un booleano';
            }

            return true
    })
    .argv;

module.exports = argv;

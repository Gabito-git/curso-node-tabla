const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar, hasta ) => {

    try {
        
        let salida = '';
        let consola = '';
        
        for( let i = 1; i <= hasta; i++ ){
            salida += `${ base } x ${ i } = ${ base * i }\n`.rainbow ;
            consola += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if( listar ){

            console.log('==================');
            console.log(`    Tabla del ${ base }`.green);
            console.log('==================');
            console.log( salida );
        }
        
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, consola);
    
        return `tabla-${ base }.txt`;        
        
    } catch (err) {

        throw err;
    }


}

module.exports={
    crearArchivo
}


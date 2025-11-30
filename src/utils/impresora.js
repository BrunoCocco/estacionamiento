import fs from 'fs'

function impresora(data){
    const contenido = data;
    fs.writeFileSync('./src/hooks/imp1.txt', contenido, 'utf-8')
}

export default impresora;
const prompt = require('prompt');

prompt.start();
prompt.get(['in'], tablas);

function tablas(err, input) {
    const n = input['in'];

    if(err || isNaN(n)) {
        console.log('Error de entrada');
        return;
    }

    for(let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

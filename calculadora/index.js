const moduloInterno = require('./modulo_interno');
const inquirer = require('inquirer');

const op = moduloInterno.op 

inquirer.prompt([
    {
        name:'n1',
        message:'Digite o valor de n1:'
    },
    {
        name:'n2',
        message:'Digite o valor de n2:'
        },
        {
            name:'resp',
            message:'Digite a operação que você deseja efetura: soma, subtração, multipliação ou divisão?'
        }

]).then ((answers)=>{
    let n1 = parseFloat (answers.n1)
    let n2 = parseFloat (answers.n2)
    let resp = parseInt(answers.resp)

    op(n1, n2)
}).catch((err) => console.log(err))

import inquirer from 'inquirer';
import {sum} from  './cal.js';
import {sub} from  './cal.js';
import {multiply} from  './cal.js';
import {divide} from  './cal.js';


let calc:{
    num1:number;
    num2:number;
    opprater:string;
}=await  inquirer.prompt([

{
    text:"enter your 1 number",
    type:"number",
    name:"num1"
},
{
    text:"enter your 2 number",
    type:"number",
    name:"num2"
},{
    text:"chooose oppreter",
    name:"opprater",
    type:"list",
    choices: ["+","-","*","/"],
}
])
if(calc.opprater==="+"){
    let result=sum(calc.num1,calc.num2);
    console.log(`sum: ${calc.num1}+${calc.num2}=${result}`)
}
if(calc.opprater==="-"){
    let result=sub(calc.num1,calc.num2);
    console.log(`sub: ${calc.num1}-${calc.num2}=${result}`)
}
if(calc.opprater==="*"){
    let result=multiply(calc.num1,calc.num2);
    console.log(`multiply: ${calc.num1}*${calc.num2}=${result}`)
}
if(calc.opprater==="/"){
    let result=divide(calc.num1,calc.num2);
    console.log(`divide: ${calc.num1}/${calc.num2}=${result}`)
}
import * as fs from "fs";

let newArgs = process.argv.slice(1);
let newArgsTwo = newArgs[1];
let fileName: string = newArgsTwo;
let newTask = newArgs[2] + " " + newArgs[3];

fs.appendFileSync(`${fileName}.txt`, `\n${newTask}`);

console.log(`Tarefa "${newTask}" adicionada com sucesso em ${fileName}.txt`);

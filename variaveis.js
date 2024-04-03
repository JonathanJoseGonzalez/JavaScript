//antes só havia um método de declarar variáveis no JS; o comando "var", mas em versões mais recentes existem os comandos "let" e "const".//

let mensagem = 'Olá.'
alert(mensagem);

//é possível também declarar várias variáveis em uma linha://

let usuário = 'John', idade = 25, mensagem1 = 'Olá'

//as variáveis não podem começar com um número e não podem conter hífen, assim como não é possível usar as palavras reservadas, como 'let', 'return' etc.//

const myBirthday = '18.04.1982';

//as variáveis 'const' não podem ser reusadas. Quando o dev tiver certeza que uma variável nunca vai mudar, pode-se declará-la como 'const'.

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

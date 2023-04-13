import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/gerente.js";
import { Diretor } from "./funcionarios/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo",10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123");
const cliente = new Cliente ("Lais",32165498712, "321" );

const gerenteestaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorestaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteestaLogado = SistemaAutenticacao.login(cliente, "321");

console.log("Gerente está logado:", gerenteestaLogado);
console.log("Diretor está logado:", diretorestaLogado);
console.log("Cliente está logado:", clienteestaLogado);

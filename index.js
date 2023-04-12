import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/gerente.js";
import { Diretor } from "./funcionarios/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo,10000,12345678900");
const gerente = new Gerente("Ricardo, 5000,12378945601");

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(estaLogado);

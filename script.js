//EXERCICIO 22
function comissao(preco,porcentagem){
resultado = (preco*porcentagem)/100
  return resultado
}
console.log(comissao(1000,10))





//EXERCICIO 21
function repete(valor,qtd){
  for(i=0;i<qtd;i++){
    console.log(valor)
  }
}




//EXERCICIO 20
function buscarDivisivelPor(array, num){
  for(i=0;i<array.length;i++){
    if(array[i] % num ==0 && array[i] != 0){
      return array[i]
      break
    }
    else if(i == array.length || num == 100){
    return "Nenhum número válido encontrado!"
    }
  }
  return resultado
}
console.log(buscarDivisivelPor( [0, 9, 4, 7, 128, 42, -1, 301, -5],2))




//EXERCICIO 19
function maiorQueNum(array, num){
  numerosMaiores = []
  for(i=0;i<array.length;i++){
    if(array[i] > num){
      numerosMaiores.push(array[i])
    }
  }
  return numerosMaiores
}
console.log(maiorQueNum([10, 4, 7, 128, 42, -1, 0, 300, -5],5))



//EXERCICIO 18
var harryPotterPrefixo = "Harry Potter";
var harryPotterSeries = ["e a Pedra Filosofal","e a Câmara Secreta","e o Prisioneiro de Azkaban","e o Cálice de Fogo","e a Ordem da Fênix","e o Enigma do Príncipe","e as Relíquias da Morte"];

function series(prefixo, array){
  var serie = []
  for(i=0;i<array.length;i++){
    serie.push(prefixo+ ' ' +  array[i])
  }
  return serie
}

console.log(series("Harry Potter",["e a Pedra Filosofal","e a Câmara Secreta","e o Prisioneiro de Azkaban","e o Cálice de Fogo","e a Ordem da Fênix","e o Enigma do Príncipe","e as Relíquias da Morte"]))




//EXERCICIO 17
var nNaoGostaram = 0
var nMediano = []
var nGostaram = []
var nota = [] 

function calculaGostos(notas){
  for(i=0;i<notas.length;i++){
    if(notas[i]==0 || notas[i]==1){
      nNaoGostaram++
    }
    else if(notas[i]==2 || notas[i]==3){
      nMediano++
      }

    else if(notas[i]==4 || notas[i]==5){
      nGostaram++
    }
  }
  return [nNaoGostaram, nMediano, nGostaram]
}
calculaGostos([1,1,3,3,5,5])
console.log(nGostaram,nMediano,nGostaram)





//EXERCICIO 16
var placas = [
   'RXB-2525', 'AKX-3333', 'ORO-7142','RXB-2525', 'AKX-3333', 'ORO-7142',
   'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',   'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'ORO-7142', 'ORO-7142',
   'ORO-7142', 'RXB-2525', 'AKX-3333','AKX-3333', 'ORO-7142', 'ORO-7142',
   'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
   'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525'
]

numeroPlaca = []

function calcularNumeroDeEntradas(placa){
    for(i=0;i<placas.length;i++){
      if(placa == placas[i]){
        numeroPlaca.push(placas[i])
      }
    }
    return numeroPlaca.length
}


//EXERCICIO 16 
function calcularValorDevido(placa){
  var valor = calcularNumeroDeEntradas(placa)
  if(valor <= 20){
    return valor * 10
  }
  else if(valor > 21){
    return valor * 5
  }
}

console.log(calcularNumeroDeEntradas("AKX-3333"))
console.log(calcularValorDevido("AKX-3333"))




//EXERCICIO 15
var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB = []
var grupoC = []

for(i=0;i<alunos.length;i++){
   if(alunos[i] >=150 && alunos[i]<=159){
     grupoA.push(alunos[i])
   }
   else if(alunos[i] >=160 && alunos[i]<=169){
     grupoB.push(alunos[i])
   }
   else if(alunos[i] >=170){
     grupoC.push(alunos[i])
   } 
}

console.log(grupoA)
console.log(grupoB)
console.log(grupoC)




//EXERCICIO 14
var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]


function maiorAlto(dados){
   if(dados[1] >= 18 && dados[2] >= 170){
      return true
   }
   else {
     return false
   }
}

console.log(maiorAlto(usuario1))








//EXERCICIO 13
var moradores = [
  "Fulano de Tal",
  "Beltrano da Cia",
  "Viajante do Tempo",
  "Morador da Lua",
  "Marciano Azul",
  "Et da Eslováquia",
  "Jedi do Lado Cinza da Força",
  "Baby Yoda Amarelo"
]

  for(i=0; i<moradores.length; i++){
     if(i%2==0){
          document.write("O morador " + moradores[i]+ " pode usar o elevador")        
  }
}

document.write("O morador " + podeUsar[0] + " pode usar o elevador")
document.write("O morador " + podeUsar[i] + ' pode usar o elevador")



//EXERCICIO 12
function menorNumero(numeroA,numeroB){
 if(numeroA < numeroB){
   return numeroA
 }
 else{
   return numeroB
 }
}

document.write(menorNumero(4,9))



// EXERCICIO 11
for (var i = 1; i <= 10; i++) {
n = i*7;
console.log('7 x ' + i + ' = ' + n)
}




//EXERCICIO 10
function cartaoDeVisitas(nome, sobrenome){
   document.write(nome + sobrenome)
}

cartaoDeVisitas("Thaís", "Minas")


//EXERCICIO 9
  function listaProdutos(){
  var lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']
  for(var i = 0; i < lista.length; i++){
   document.write(lista[i])
  }
  }

  listaProdutos("Leite")



//EXERCICIO 8
  var baralho = ["Ás", "Dama", "Rei", "Valete"]
  var carta = "Rei"
  for(var i=0;i<baralho.length;i++){
   if(baralho[i]== carta){
    break
  };
  document.write("Encontrei o Rei!")
  }


//EXERCICIO 7
var listaDeNumeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]

for (var i = 0; i < listaDeNumeros.length; i++) {
if(listaDeNumeros[i] == '2', '4', '6', '8', '10', '12', '14', '16', '18', '20') {
  continue
}
  console.log(listaDeNumeros[i])
}





//XERCICIO 6 
var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0
for(var i = 0; i < listaDeGanhos.length; i++){  
  if(listaDeGanhos[i] < 0)
   totalNegativos++}  
document.write(totalNegativos);




//EXERCICIO 5
var listaDeLucro = [100, 30, 300, -10, 600, 10];
var lucroTotal = 0;
for (var i=0; i < listaDeLucro.length; i++){
 lucroTotal = lucroTotal + listaDeLucro[i]}
document.write(lucroTotal)



//EXERCICIO 4
var listaDeCarros = [ "Fox", "Uno", "Gol", "Astra", "Fiesta"]
for(var nome=0; nome < listaDeCarros.length;nome++){
   document.write("Nome do Carro: " + listaDeCarros[nome])}


//EXERCICIO 3  
var bomDia = "Bom dia, Grupo"
for(var i =0; i <=6; i++){
   document.write(bomDia)}



//EXERCICIO 2
var numero = 7
for (i = 1;i <= 10; i++){
   numero = 7*i
   document.write("7 x "+i + "=" + numero + " " )}



//EXERCICIO 1
var diaSemana = "sabado"

var fimDeSemana = ["sabado", "domingo"]

if (diaSemana == fimDeSemana ){
    document.write("O banco está fechado, tente outro dia")
} else{
    document.write("Você pode ir ao banco")}

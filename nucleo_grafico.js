
var numeross = 0; // variavel que define o numero de discos
var disco_origem = 0; // variavel que define o disco que foi clicado
var torre_origem = 0;// variavel que define a torre(pino) do disco que foi clicado
var discos = []; // array que armazena os objetos
var num_pi = []; // array que armazena o numero discos em cada pino
var ganhou = 0; // variavel que indica se o jogador ganhou ou nao o jogo


function iniciar(env) {

   numeross = env;
   gerar_graficos(numeross);
   for (var j = 0; j < numeross; j++) discos[j] = new Gerar((j + 1), 1, (j + 1));
   num_pi = [numeross, 0, 0];
   document.getElementsByClassName("aviso_erro")[0].style.display = "none"; //ocultando o aviso inicial
}

/* definir o disco e a torre de origem */
function definir_disco(disco, torre) {
   disco_origem = disco;
   torre_origem = torre;
}

/* definir a torre de destino */
function definir_pino(num) {
   if (disco_origem != 0 && torre_origem != 0) {

      var ret = discos[disco_origem - (7 - numeross + 1)].movimentar(num);
      console.log(ret);

      switch (ret) {
         case 0:
            document.getElementById("aviso_texto").innerHTML = "Você deve remover os discos de cima primeiro";
            document.getElementsByClassName("aviso_erro")[1].style.display = "block";
            break;
         case 1:
            document.getElementById("aviso_texto").innerHTML = "O disco de cima não pode ser maior do que o de baixo";
            document.getElementsByClassName("aviso_erro")[1].style.display = "block";
            break;
         case 2:
            document.getElementById("aviso_texto").innerHTML = "Escolha outro pino";
            document.getElementsByClassName("aviso_erro")[1].style.display = "block";
            break;
         case 3:
            trocar(num);
            break;
         default:
            trocar(num);

            if (movimentos > (Math.pow(2, numeross) - 1)) {
               var aviso = document.getElementById("aviso_texto");
               aviso.innerHTML = "";                            
               
               var paragrafo = document.createElement("p");
               paragrafo.innerHTML = "VOCÊ CONSEGUIU, PARABÉNS!!!<br>" +
                                     "MAS ACHOU QUE SERIA FACIL É? <br>"+
                                     "PARA DESCOBRIR O SEXO DO BEBÊ, TEM SER PERFEITO, VOCÊ GASTOU <b>" + movimentos + "</b> MOVIMENTOS<br>" +
                                     "FAÇA EM <b>" + (Math.pow(2, numeross) - 1) + " MOVIMENTOS, E DESCUBRIRÁ! </b><br>";
               aviso.appendChild(paragrafo);
               
               var botao = document.createElement("button");
               botao.id = "reini";
               botao.innerHTML = "REINICIAR";
               botao.onclick = function() { sair(); };
               aviso.appendChild(botao);
            } else {
               var aviso = document.getElementById("aviso_texto");
               aviso.innerHTML = "";

               var img = document.createElement("img");
               img.src = "revelado.png";               
               img.classList.add("imagem-revelado");               
               aviso.appendChild(img);
               var paragrafo = document.createElement("p");
               paragrafo.innerHTML = "PERFEITO!!!, PARABÉNS!!!<br>";
               aviso.appendChild(paragrafo);               
               var botao = document.createElement("button");
               botao.id = "reini";
               botao.innerHTML = "REINICIAR";
               botao.onclick = function() { sair(); };
               aviso.appendChild(botao);
            }

            document.getElementsByClassName("aviso_erro")[1].style.display = "block";
            ganhou = 1;
      }

   }

   disco_origem = 0;
   torre_origem = 0;

}

function trocar(num) {
   num_pi[num - 1] += 1;
   num_pi[torre_origem - 1] -= 1;
   document.getElementById("espaco" + num).style.height = (100 - 13 * num_pi[num - 1]) + '%';
   document.getElementById("espaco" + torre_origem).style.height = (100 - 13 * num_pi[torre_origem - 1]) + '%';
   document.getElementById('disco' + disco_origem + '_' + torre_origem).style.display = "none";
   document.getElementById('disco' + disco_origem + '_' + num).style.display = "block";
   var quant = parseInt(document.getElementById("num_mov1").innerHTML);
   document.getElementById("num_mov1").innerHTML = quant + 1;
}

function sair() {
   document.getElementsByClassName("aviso_erro")[1].style.display = "none";
   if (ganhou == 1) {
      document.getElementsByClassName("aviso_erro")[0].style.display = "block";
      ganhou = 0;
   }
}

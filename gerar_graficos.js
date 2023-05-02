
/* gera os discos graficamente */
function gerar_graficos(numero) {

	// numero de movimentos minimo
	document.getElementById("num_mov2").innerHTML = Math.pow(2, numero) - 1;

	// certficando que o numero de movimentos comece como zero
	movimentos = 0;

	// certificando que o numero exibindo de movimentos tambem seja zero
	document.getElementById("num_mov1").innerHTML = 0;


	/* definindo espaco acima dos discos */
	document.getElementById("espaco1").style.height = (100 - 13 * numero) + '%';
	document.getElementById("espaco2").style.height = (100 - 13 * numero) + '%';
	document.getElementById("espaco3").style.height = (100 - 13 * numero) + '%';
		/* --------------------------------- */

	// gerando discos
	for (var torre = 1; torre <= 3; torre++) {
		for (var disco = 1; disco <= 7; disco++) {
			// apagando qualquer disco remanescente	
			document.getElementById("disco" + disco + "_" + torre).style.display = "none";
			if (disco >= (7 - numero + 1)) {
				// definindo o numero em cada disco para cada torre
				document.getElementById("disconum" + disco + "_" + torre).innerHTML = disco - (7 - numero);
				// gerandos os discos da torre 1
				if (torre == 1) document.getElementById("disco" + disco + "_" + torre).style.display = "block";
			}
		}
	}
}

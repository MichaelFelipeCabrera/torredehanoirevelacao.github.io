var movimentos = 0; // variavel que armazena os movimentos do usuario


function Gerar(tamanho, torre, ordem) { /* constructor do objeto disco*/

	this.tam = tamanho; // tamanho do disco
	this.tor = torre; // torre em que o disco esta
	this.ord = ordem; // ordem em que o disco na torre

	this.verificar = function (dest) {
		/* 
		funcao que verifica se o disco a ser movido eh menor que os discos da torre de destino
		onde:
		se retornar 0 significa que a movimentacao nao eh permitida
		se retornar 1 significa que a movimentacao eh permitida
		*/
		for (var i = 0; i < discos.length; i++) if ((discos[i].tor == dest) && (this.tam > discos[i].tam)) return 0;
		return 1;

	};

	this.nova_ordem = function (dest, tipo) {// dest -> torre de destino, tipo -> adicionar ou remover disco

		if (tipo == 0) { // adicionar elemento a haste
			for (var i = 0; i < discos.length; i++) if (discos[i].tor == dest) discos[i].ord += 1;
		} else { // remover elemento da haste
			for (var i = 0; i < discos.length; i++) if (discos[i].tor == dest) discos[i].ord -= 1;
		}

	};

	this.ganhou = function () { // verifica se o jogador ganhou ou nao
		for (var i = 0; i < discos.length; i++) if (discos[i].tor != 3) return 0;
		return 1;
	};

	this.movimentar = function (torre_destino) {
		/*
		se retornar 0 significa que o disco nao pode ser movido por ter outro disco acima
		se retornar 1 significa que o disco nao pode ser movido por ser maior que algum disco que ja esta na torre
		se retornar 2 significa que o disco nao pode ser movido por conta da torre escolhida
		se retornar 3 significa que o disco foi movido para a torre escolhida
		se retornar 4 significa que o jogador ganhou
		*/

		if (this.ord != 1) return 0;
		else if (this.verificar(torre_destino) == 0) return 1;
		else if ((torre_destino == this.tor) || ((torre_destino != 1) && (torre_destino != 2) && (torre_destino != 3))) return 2;
		else {

			this.nova_ordem(torre_destino, 0);
			this.nova_ordem(this.tor, 1);
			/* muda o local do disco */
			this.tor = torre_destino;
			this.ord = 1;
			movimentos++;

			if (this.ganhou() == 1) return 4;
			else return 3;
		}
	};

}

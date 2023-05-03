
var g = 4;
window.onload = function () {
	var u = setInterval(mudarblur, 200);
}

function mudarblur() {
	g = g - 0.8;
	document.getElementById("logo_comeco").style.filter = 'blur(' + g + 'px)';

	if (g < -10) {

		document.getElementById("tela_comeco").style.display = "none";
		clearInterval(u);

	}

}
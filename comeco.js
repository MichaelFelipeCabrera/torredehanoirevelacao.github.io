
var g = 4;
window.onload = function () {
	var u = setInterval(mudarblur, 100);
}

function mudarblur() {
	g = g - 0.7;
	document.getElementById("logo_comeco").style.filter = 'blur(' + g + 'px)';

	if (g < -10) {

		document.getElementById("tela_comeco").style.display = "none";
		clearInterval(u);

	}

}
window.onload = function(){
	let audios = document.querySelector("#audio");
	window.addEventListener("mousemove",function(){
		audios.play();
	},{ once: true});
};
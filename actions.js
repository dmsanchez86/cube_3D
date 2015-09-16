window.onload = function(){
	var content_logo = document.querySelector('.content_logo');
	var divs = document.querySelectorAll('.content_logo > div');
	var body = document.querySelector('body');
	var control = true;
	var t = null;

	body.onclick = function(){
		this.style.transform = "perspective(800px) translatez(-500px)";

		background_image('radial-gradient(center, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(128, 0, 0, 0.21))',divs);

		clearTimeout(t);
		t = setTimeout(function(){
			body.style.transform = "perspective(800px) translatez(0px)";
			background_image('radial-gradient(center, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 128, 0, 0.21))',divs);
		},4000);
	}

	body.ondblclick = function(){
		this.style.transform = "perspective(800px) translatez(200px)";

		background_image('radial-gradient(center, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(128, 121, 0, 0.21))',divs);

		clearTimeout(t);
		t = setTimeout(function(){
			body.style.transform = "perspective(800px) translatez(0px)";
			background_image('radial-gradient(center, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 128, 0, 0.21))',divs);
		},4000);
	}

	content_logo.onmouseover = function(){
		if(control){
			this.style.transform = 'rotatey(360deg) rotatex(0) translatey(-100px)';
			control = false;
		}else{
			this.style.transform = 'rotatey(0) rotatex(360deg) translatey(-100px)';
			control = true;
		}
		setTimeout(function(){
			content_logo.style.transform = 'rotatey(0deg) rotatex(0) translatey(0px,0px,0)';
		},2000);
	}
	content_logo.onmouseout = function(){
		this.style.transform = 'rotatey(0deg) rotatex(0) translatey(0)';
	}
}

function background_image(param,divs){
	for (var i = 0; i < divs.length; i++){
		divs[i].style.backgroundImage = '-webkit-'+param;
		divs[i].style.backgroundImage = param;
	};
}
window.onload = function(){
	var content_logo = document.querySelector('.content_logo');
	var divs = document.querySelectorAll('.content_logo > div');
	var body = document.querySelector('body');
	var control = true;
	var t = null;

	body.onclick = function(){
		this.style.transform = "perspective(800px) translatez(-500px)";

		background_image('radial-gradient(center, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(128, 0, 0, 0.21))', divs);

		this.className = "theme1";

		clearTimeout(t);
		t = setTimeout(function(){
			body.className = "";
			body.style.transform = "perspective(800px) translatez(0px)";
			background_image('radial-gradient(center, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 128, 0, 0.21))', divs);
		},8000);
	}

	body.ondblclick = function(){
		this.style.transform = "perspective(800px) translatez(400px)";

		background_image('radial-gradient(center, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(128, 121, 0, 0.21))',divs);

		this.className = "theme2";

		clearTimeout(t);
		t = setTimeout(function(){
			body.className = "";
			body.style.transform = "perspective(800px) translatez(0px)";
			background_image('radial-gradient(center, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 128, 0, 0.21))',divs);
		},10000);
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

function background_image(param,obj){
	for (var i = 0; i < obj.length; i++){
		obj[i].style.backgroundImage = '-webkit-'+param;
		obj[i].style.backgroundImage = '-moz-'+param;
		obj[i].style.backgroundImage = param;
	}
}
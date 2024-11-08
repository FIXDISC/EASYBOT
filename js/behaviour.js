function close_1(obj){
    obj = document.getElementById(obj).style;
    obj.display = "none";
}

function open_1(obj, old){
    obj = document.getElementById(obj);
    obj.style.display = old;
}

function switch_1(){
    obj = document.getElementById('css');
    sheet = document.getElementById('css').href.split('css/')[1];
    modo = document.getElementById('modo');
    if(sheet == "style.css"){
        obj.href = document.getElementById('css').href.split('css/')[0] + "css/style_claro.css";
        modo.innerHTML = "<i class='fa fa-adjust'></i>&nbsp;&nbsp;Modo Oscuro";
    }else{
        obj.href = document.getElementById('css').href.split('css/')[0] + "css/style.css";
        modo.innerHTML = "<i class='fa fa-adjust'></i>&nbsp;&nbsp;Modo Claro";
        
    }
    img_modo();
}

function toggle_1(obj){
    obj = document.getElementById(obj);
    if(obj.className == "fa fa-toggle-on of"){
        obj.className = "fa fa-toggle-on on"
    }else{
        obj.className = "fa fa-toggle-on of"
    }
}

function show_menu(menu){
    menu = document.getElementById(menu);
    if(menu.style.display != "block"){ menu.style.display = "block" }else{ menu.style.display = "none" }
}

function img_modo(){
    obj = document.getElementById('css');
    sheet = document.getElementById('css').href.split('css/')[1];
    if(sheet == "style.css"){
        document.getElementById("bot_icon").src = "../img/bot.png";
    }else{
        document.getElementById("bot_icon").src = "../img/bot_black.png";
    }
}

function display_zona(obj){
	obj = document.getElementById(obj);
	if (obj.style.maxHeight=="0px" || obj.style.maxHeight==""){
        obj.style.maxHeight = "2000px";
        obj.style.display = "block";
	}else{
		obj.style.maxHeight = "0px";
	}
}
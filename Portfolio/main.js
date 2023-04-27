
function TChange() {
	if (confirm("Do You want to change the color : ")){
		a=prompt("Enter Sidebar Background Color :");
		b=prompt("Enter Main Background Color :");
		c=prompt("Enter Text Color :");
		if (a!=null && a.length!=0){document.documentElement.style.setProperty('--bg-color',a);}
		if (b!=null && b.length!=0){document.documentElement.style.setProperty('--bg-sub', b);}
		if (c!=null && c.length!=0){document.documentElement.style.setProperty('--txt-color', c);}
		document.documentElement.style.setProperty('--hov', 'red');
		document.getElementById("mainlogo").style.setProperty('display', 'none');
		document.getElementById("custom").style.setProperty('display', 'block');
		// document.getElementById("mainlogo").setAttribute("src",'nothing.jpg');
	}

}
function myFunction(c) {
	document.getElementById("mainlogo").style.setProperty('display', 'block');
	document.getElementById("custom").style.setProperty('display', 'none');
	document.documentElement.style.setProperty('--bg-color', '#8CD790');
	document.documentElement.style.setProperty('--bg-sub', 'pink');
	document.documentElement.style.setProperty('--txt-color', '#504e70');
	document.documentElement.style.setProperty('--hov', 'red');
	document.getElementById("mainlogo").setAttribute("src",'adi2.jpg');
	document.documentElement.style.setProperty('--oo', 'none');	
	document.documentElement.style.setProperty('--nn', 'block');
}
function myFunction1(c) {
	document.getElementById("mainlogo").style.setProperty('display', 'block');
	document.getElementById("custom").style.setProperty('display', 'none');
	document.documentElement.style.setProperty('--bg-color', '#504e70');
	document.documentElement.style.setProperty('--bg-sub', '#FF5154');
	document.documentElement.style.setProperty('--txt-color', 'white');
	document.documentElement.style.setProperty('--hov', '#0CB650');
	document.getElementById("mainlogo").setAttribute("src",'adi1.png');
	document.documentElement.style.setProperty('--oo', 'block');	
	document.documentElement.style.setProperty('--nn', 'none');
}

function myFunc2(){
	const btnCircle = document.createElement("span");
	btnCircle.classList.add("btn-circle");
	document.documentElement.style.setProperty('--p2', 'block');
	document.documentElement.style.setProperty('--p3', 'none');
	document.documentElement.style.setProperty('--p4', 'none');
	document.documentElement.style.setProperty('--p1', 'none');
	document.getElementById("hh").className = "non-active";
	document.getElementById("cc").className = "non-active";
	document.getElementById("pp").className = "non-active";
	document.getElementById("aa").className = "active";
}

function myFunc1(){
	document.documentElement.style.setProperty('--p2', 'none');
	document.documentElement.style.setProperty('--p3', 'none');
	document.documentElement.style.setProperty('--p4', 'none');
	document.documentElement.style.setProperty('--p1', 'block');
	document.getElementById("hh").className = "active";
	document.getElementById("cc").className = "non-active";
	document.getElementById("pp").className = "non-active";
	document.getElementById("aa").className = "non-active";

}

function myFunc3(){
	document.documentElement.style.setProperty('--p2', 'none');
	document.documentElement.style.setProperty('--p3', 'block');
	document.documentElement.style.setProperty('--p4', 'none');
	document.documentElement.style.setProperty('--p1', 'none');
	document.getElementById("hh").className = "non-active";
	document.getElementById("cc").className = "non-active";
	document.getElementById("pp").className = "active";
	document.getElementById("aa").className = "non-active";

}

function myFunc4(){
	document.documentElement.style.setProperty('--p2', 'none');
	document.documentElement.style.setProperty('--p3', 'none');
	document.documentElement.style.setProperty('--p4', 'block');
	document.documentElement.style.setProperty('--p1', 'none');
	document.getElementById("hh").className = "non-active";
	document.getElementById("cc").className = "active";
	document.getElementById("pp").className = "non-active";
	document.getElementById("aa").className = "non-active";

}

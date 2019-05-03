var x = 15;
var point = 17;
var count = 0;
function Click(a, d) {
	if(document.getElementById(a).className == 'unselect'){
        // do some stuff
        document.getElementById(a).className = 'select';
		for(i=0; i < d.length; i++) {
			document.getElementById(d[i]).disabled = true;
		}
    }
    else {
        // do some other stuff
        document.getElementById(a).className = 'unselect';
		for(i=0; i < d.length; i++) {
			document.getElementById(d[i]).disabled = false;
		}
    }
}
function Item(a, b) {
	if(document.getElementById(a).className == 'unselect'){
        // do some stuff
        document.getElementById(a).className = 'select';
        x = x - b
    }
    else {
        // do some other stuff
        document.getElementById(a).className = 'unselect';
        x = x + b
    }
    document.getElementById("item").innerHTML = x + " Items Left";
}
function Point(a, b) {
	if(document.getElementById(a).className == 'unselect'){
        // do some stuff
        document.getElementById(a).className = 'select';
        point = point - b
    }
    else {
        // do some other stuff
        document.getElementById(a).className = 'unselect';
        point = point + b
    }
    document.getElementById("point").innerHTML = point + " Points Left";
}
function UP() {
	if(count >= 0){
		point = point - 2;
		x = x + 1;
		count++;
	} else {
		point = point - 1;
		x = x + 1;
		count++;
	}
	document.getElementById("point").innerHTML = point + " Points Left";
	document.getElementById("item").innerHTML = x + " Items Left";
	document.getElementById("count").innerHTML = count;
}
function DOWN() {
	if(count <= 0){
		point = point + 1;
		x = x - 1;
		count--;
	} else {
		point = point + 2;
		x = x - 1;
		count--;
	}
	document.getElementById("point").innerHTML = point + " Points Left";
	document.getElementById("item").innerHTML = x + " Items Left";
	document.getElementById("count").innerHTML = count;
}
function SPECIAL() {
	if(count != 0){
		document.getElementById('SPECIAL').className = 'select';
	} else {
		document.getElementById('SPECIAL').className = 'unselect';
	}
}
function res() {
	document.getElementById("res").innerHTML = "";
	var res = document.getElementsByClassName('select');
	for(y=0; y<res.length; y++){
		document.getElementById("res").innerHTML += res[y].id + "<br>";
	}
}
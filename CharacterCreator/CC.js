var x = 10;
//document.getElementById("points").innerHTML = x + " points";
function Click(a, b, c, d, e, f) {
	if(e != ''){
		var alrt = "";
		for(var i = 0; i < e.length; i++){
			if(document.getElementById(e[i]).className == 'Outset'){
				alrt += " " + e[i];
			}
		}
		if(alrt == '') {
			
		} else {
			alert("You need to select" + alrt);
			return;
		}
	}
	if(f != ''){
		var alrt = "";
		for(var i = 0; i < f.length; i++){
			if(document.getElementById(f[i]).className == 'Inset'){
				alrt += " " + f[i];
			}
		}
		if(alrt == '') {
			
		} else {
			alert("You need to unselect" + alrt);
			return;
		}
	}
	if(document.getElementById(a).className == 'Outset'){
		document.getElementById(a).className = 'Inset';
		x -= c;
		if(b != ''){
			for(var i = 0; i < b.length; i++){
				if(document.getElementById(b[i]).className == 'Inset') {
					x += d[i];
				}
				document.getElementById(b[i]).className = 'Outset';
			}
		}
	} else {
		document.getElementById(a).className = 'Outset';
		x += c;
		if(b != ''){
			for(var i = 0; i < b.length; i++){
				if(document.getElementById(b[i]).className == 'Inset') {
					x += d[i];
				}
				document.getElementById(b[i]).className = 'Outset';
			}
		}
	}
	document.getElementById("points").innerHTML = x + " points";
}

function End() {
	var o = document.getElementsByClassName('Inset');
	document.getElementById("end").innerHTML = "Result<br><br>";
	for(var i = 0; i < o.length; i++) {
		document.getElementById("end").innerHTML += o[i].getAttribute("data-return") + "<br>";
	}
}

function Selector(a, b) {
	document.getElementById(b).className = document.getElementById(a).className;
}
	

document.getElementById("HeightS").oninput = function() {
	var cm = this.value;
	var inch = cm/2.54;
	var foot = Math.floor(inch/12);
	inch %= 12;
	document.getElementById('HeightD').innerHTML = cm + 'cm - ' + foot + 'ft ' + inch.toFixed(0) + 'in';
	document.getElementById('Height').setAttribute("data-return", cm + 'cm - ' + foot + 'ft ' + inch.toFixed(0) + 'in');
}
document.getElementById("LengthS").oninput = function() {
	var cm = this.value;
	var inch = cm/2.54;
	document.getElementById('LengthD').innerHTML = cm + 'cm - ' + inch.toFixed(0) + 'in';
	document.getElementById('Length').setAttribute("data-return", cm + 'cm - ' + inch.toFixed(0) + 'in');
}
document.getElementById("SizeS").oninput = function() {
	var a = this.value;
	switch(true) {
		case (this.value) == 1:
			document.getElementById('SizeD').innerHTML = "AA-cup";
			document.getElementById('Size').setAttribute("data-return", "AA-cup");
			break;
		case (this.value) ==  2:
			document.getElementById('SizeD').innerHTML = "A-cup";
			document.getElementById('Size').setAttribute("data-return", "A-cup");
			break;
		case (this.value) ==  3:
			document.getElementById('SizeD').innerHTML = "B-cup";
			document.getElementById('Size').setAttribute("data-return", "B-cup");
			break;
		case (this.value) ==  4:
			document.getElementById('SizeD').innerHTML = "C-cup";
			document.getElementById('Size').setAttribute("data-return", "C-cup");
			break;
		case (this.value) ==  5:
			document.getElementById('SizeD').innerHTML = "D-cup";
			document.getElementById('Size').setAttribute("data-return", "D-cup");
			break;
		case (this.value) ==  6:
			document.getElementById('SizeD').innerHTML = "E/DD-cup";
			document.getElementById('Size').setAttribute("data-return", "E/DD-cup");
			break;
		case (this.value) ==  7:
			document.getElementById('SizeD').innerHTML = "F/DDD-cup";
			document.getElementById('Size').setAttribute("data-return", "F/DDD-cup");
			break;
		case (this.value) ==  8:
			document.getElementById('SizeD').innerHTML = "G/DDDD-cup";
			document.getElementById('Size').setAttribute("data-return", "G/DDDD-cup");
			break;
		default:
			document.getElementById('SizeD').innerHTML = "<br>ERROR</b>";
			document.getElementById('Size').setAttribute("data-return", "ERROR");
	}
}



/*
a - the item the user clicked on
b - the array of items that need to be unselected
c - the point value of the 'a' item
d - the array of point values for each element of 'b'
e - the array of items that need to be 'Inset' for the 'a' item to be selected
f - the array of items that need to be 'Outset' for the 'a' item to be selected
*/


/*
<div data-return="" id="" class="Outset" onclick="Click('', ['unselectArr'], point, [pointArr], ['InsetItem'], ['OutsetItem'])">
<b></b>
<br><img src="PIC/." alt="" width="300px;"><br>

</div>
*/
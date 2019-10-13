var x = 10;
document.getElementById("points").innerHTML = x + " points";
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
/*
a - the item the user clicked on
b - the array of items that need to be unselected
c - the point value of the 'a' item
d - the array of point values for each element of 'b'
e - the array of items that need to be 'Inset' for the 'a' item to be selected
f - the array of items that need to be 'Outset' for the 'a' item to be selected
*/
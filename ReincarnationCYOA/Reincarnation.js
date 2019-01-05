function req() {
	alert ("You must be over the age of 18 to use this website!");
}
var x = 0;
function Click(b, a, c, d) {
	if(document.getElementById(a).style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById(a).style.borderStyle = 'inset';
        x = x + b
		for(i=0; i < d; i++) {
			document.getElementById(c[i]).disabled = true;
		}
    }
    else {
        // do some other stuff
        document.getElementById(a).style.borderStyle = 'outset';
        x = x - b
		for(i=0; i < d; i++) {
			document.getElementById(c[i]).disabled = false;
		}
    }
    document.getElementById("demo").innerHTML = x + " points";
}
function dis(a, b, c, d) {
	if(document.getElementById(a).style.borderStyle == 'outset') {
		alert (d);
	}
	else if(document.getElementById(b).style.borderStyle == 'outset'){
		// do some stuff
		document.getElementById(b).style.borderStyle = 'inset';
		x = x + c
	}
	else {
		// do some other stuff
		document.getElementById(b).style.borderStyle = 'outset';
		x = x - c;
	}
    document.getElementById("demo").innerHTML = x + " points";
}
function unClick(a, c) {
	if(document.getElementById(a).style.borderStyle == 'inset') {
		document.getElementById(a).style.borderStyle = 'outset';
		x = x - c;
		document.getElementById("demo").innerHTML = x + " points";
	}
}
function dis2(z, e, b, c, d) {
	for(i=0; i < e; i++){
		if((document.getElementById(z[i]).style.borderStyle == 'inset')||(document.getElementById(z[i]).disabled == true)||(document.getElementById(z[i]).checked == true)) {
			alert (d);
			return;
		}
	}
	if(document.getElementById(b).style.borderStyle == 'outset'){
		// do some stuff
		document.getElementById(b).style.borderStyle = 'inset';
		x = x + c;
	}
	else {
		// do some other stuff
		document.getElementById(b).style.borderStyle = 'outset';
		x = x - c;
	}
    document.getElementById("demo").innerHTML = x + " points";
}
function sp(z, e, b, c, d) {
	for(i=0; i < e; i++){
		if(document.getElementById(z[i]).style.borderStyle == 'inset') {
				alert (d);
				return;
			}
		}
	if(document.getElementById(b).style.borderStyle == 'outset'){
		// do some stuff
		document.getElementById(b).style.borderStyle = 'inset';
		x = x + c;
	}
	else {
		// do some other stuff
		document.getElementById(b).style.borderStyle = 'outset';
		x = x - c;
	}
    document.getElementById("demo").innerHTML = x + " points";
}
function HSS() {
	var a = 0;
	if(document.getElementById('Hear').checked == true) {
		a++;
	}
	if(document.getElementById('See').checked == true) {
		a++;
	}
	if(document.getElementById('Speak').checked == true) {
		a++;
	}
	if(a > 0) {
		if(document.getElementById('HSS').style.borderStyle == 'outset') {
		// do some stuff
		document.getElementById('HSS').style.borderStyle = 'inset';
		}
	}
	else {
		// do some other stuff
		document.getElementById('HSS').style.borderStyle = 'outset';
	}
}
function box(a) {
	if(document.getElementById(a).checked == true) {
		x = x + 1;
		if(document.getElementById('Quiet').style.borderStyle == 'inset'){
		// do some stuff
		document.getElementById('Quiet').style.borderStyle = 'outset';
		x = x - 1;
		}
	}
	else {
		x = x - 1;
	}
	document.getElementById("demo").innerHTML = x + " points";
}
function end() {
	var end = "";
	var Equipment = ['Dick','Vagina'];
	for(i=0;i<2;i++){
		if(document.getElementById(Equipment[i]).style.borderStyle == 'inset') {
			end = end + Equipment[i];
		}
	}
	if(document.getElementById('DickAndVagina').style.borderStyle == 'inset') {
		end = end + 'A dick and a vagina';
	}
	var BodyType = ['Muscular','Skinny','Average','Curvy','Fit','Plump']
	for(i=0;i<6;i++){
		if(document.getElementById(BodyType[i]).style.borderStyle == 'inset') {
			end = end + "<br><br>" +BodyType[i];
		}
	}
	if(document.getElementById('ExtraThick').style.borderStyle == 'inset') {
		end = end + "<br><br>" +'Extra thick';
	}
	end = end + "; body type";
	end = end + "<br>";
	var Breasts = ['Flat','Small','Big','Huge'];
	for(i=0;i<4;i++){
		if(document.getElementById(Breasts[i]).style.borderStyle == 'inset') {
			end = end + "<br>" + Breasts[i];
		}
	}
	if(document.getElementById('AverageB').style.borderStyle == 'inset') {
		end = end + "<br><br>" + 'Average';
	}
	end = end + "; breasts";
	var Height = ['Short','Tiny','Tall'];
	for(i=0;i<3;i++){
		if(document.getElementById(Height[i]).style.borderStyle == 'inset') {
			end = end + "<br><br>" + Height[i];
		}
	}
	if(document.getElementById('AverageH').style.borderStyle == 'inset') {
		end = end + "<br><br>" + 'Average';
	}
	if(document.getElementById('HugeH').style.borderStyle == 'inset') {
		end = end + "<br><br>" + 'Huge';
	}
	end = end + "; height";
	var Species = ['Succubus','Kitsune','Catgirl','DogGirl','Lamia','Harpy','Cowgirl','SlimeGirl','Centaur','Angel','Fairy','Mermaid','PlantGirl','Human'];
	for(i=0;i<3;i++){
		if(document.getElementById(Species[i]).style.borderStyle == 'inset') {
			end = end + "<br><br>" + Species[i];
		}
	}
	if(document.getElementById('DogGirl').style.borderStyle == 'inset') {
		end = end + "<br><br>" + 'Dog girl';
	}
	if(document.getElementById('SlimeGirl').style.borderStyle == 'inset') {
		end = end + "<br><br>" + 'Slime girl';
	}
	if(document.getElementById('PlantGirl').style.borderStyle == 'inset') {
		end = end + "<br><br>" + 'Plant girl';
	}
	if(document.getElementById('CYO').style.borderStyle == 'inset') {
		var k = document.getElementById('TextBox');
        var y = k.value;
		end = end + "<br><br>" + 'Chose your own:' + " " + y;
	}
	
	if(document.getElementById('CO').style.borderStyle == 'inset') {
		end = end + "<br><br>" + 'Complete overwrite';
	}
	if(document.getElementById('CN').style.borderStyle == 'inset') {
		end = end + "<br><br>" + 'Completely normal?';
	}
	if(document.getElementById('Accepting').style.borderStyle == 'inset') {
		end = end + "<br><br>" + 'Accepting';
	}
	if(document.getElementById('OITR').style.borderStyle == 'inset') {
		end = end + "<br><br>" + 'Out in the rain';
	}
	end = end + "<br>";
	var Boons = ['Intelligent','Athletic','Money','Loaded','Flight','Lucky','Apprentice','Delicious','Lactation','Motherly','Oviposition','Stretchy','Tentacles','Lubrication','Flexible','Weredick','Switcheroo'];
	for(i=0;i<17;i++){
		if(document.getElementById(Boons[i]).style.borderStyle == 'inset') {
			end = end + "<br>" + Boons[i] + ",";
		}
	}
	if(document.getElementById('RazorSharp').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Razor sharp,';
	}
	if(document.getElementById('RecordBreaking').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Record breaking,';
	}
	if(document.getElementById('BeautifulVoice').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Beautiful voice,';
	}
	if(document.getElementById('SmoothTalker').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Smooth talker,';
	}
	if(document.getElementById('Money').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Here comes the money,';
	}
	if(document.getElementById('SoMuchMoney').style.borderStyle == 'inset') {
		end = end + "<br>" + 'So much money, so little time,';
	}
	if(document.getElementById('WaterBreathing').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Water breathing,';
	}
	if(document.getElementById('MasterChef').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Master chef,';
	}
	if(document.getElementById('AngelicBlessing').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Angelic blessing,';
	}
	if(document.getElementById('EasyBeauty').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Easy beauty,';
	}
	if(document.getElementById('GoodHairDay').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Good hair day,';
	}
	if(document.getElementById('PerfectStyle').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Perfect style,';
	}
	if(document.getElementById('HaremMaster').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Harem master,';
	}
	if(document.getElementById('SkilledMouth').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Skilled mouth,';
	}
	if(document.getElementById('SkilledBody').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Skilled body,';
	}
	if(document.getElementById('AddictiveCum').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Addictive cum,';
	}
	if(document.getElementById('FullStop').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Full stop,';
	}
	if(document.getElementById('EasyPregnancy').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Easy pregnancy,';
	}
	if(document.getElementById('PerfectFit').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Perfevt fit,';
	}
	if(document.getElementById('MoreHoles').style.borderStyle == 'inset') {
		end = end + "<br>" + 'More holes,';
	}
	if(document.getElementById('TentaclesPlus').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Tentacles plus,';
	}
	if(document.getElementById('STDImmunity').style.borderStyle == 'inset') {
		end = end + "<br>" + 'STD immunity,';
	}
	if(document.getElementById('LustAura').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Lust aura,';
	}
	if(document.getElementById('FreePass').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Free pass,';
	}
	if(document.getElementById('FreePassPlus').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Free pass plus,';
	}
	if(document.getElementById('WaifuHusbando').style.borderStyle == 'inset') {
		end = end + "<br>" + 'The perfect waifu/husbando,';
	}
	if(document.getElementById('WWTLF').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Who wants to live forever,';
	}
	if(document.getElementById('OrientationShift').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Orientation shift,';
	}
	if(document.getElementById('NSH').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Nothing suspicious here,';
	}
	end = end + "<br>";
	var Banes = ['Unfit','Lazy','Heat','Broodmother','Barren','Easy','Lightweight','Gullible','Underwhere','Showoff','Colorblind','Quiet','Balloon','Cocksleeve','Messy','Inconceivable','Parasite'];
	for(i=0;i<17;i++){
		if(document.getElementById(Banes[i]).style.borderStyle == 'inset') {
			end = end + "<br>" + Banes[i] + ",";
		}
	}
	if(document.getElementById('ToxicWaste').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Toxic waste,';
	}
	if(document.getElementById('EasilyEmbarrassed').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Easily embarrassed,';
	}
	if(document.getElementById('FreeHugs').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Free hugs,';
	}
	if(document.getElementById('LiquidLunch').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Liquid lunch,';
	}
	if(document.getElementById('AlwaysReady').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Always ready,';
	}
	if(document.getElementById('SexAddict').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Sex addict,';
	}
	if(document.getElementById('RollTheDice').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Roll the dice,';
	}
	if(document.getElementById('MilkFountain').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Milk fountain,';
	}
	if(document.getElementById('BallBalloons').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Ball balloons,';
	}
	if(document.getElementById('XenoGenitals').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Xeno genitals,';
	}
	if(document.getElementById('IceCold').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Ice cold,';
	}
	if(document.getElementById('YouWannaDoWhat').style.borderStyle == 'inset') {
		end = end + "<br>" + 'You wanna do what?,';
	}
	if(document.getElementById('BarbieGirl').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Barbie girl,';
	}
	if(document.getElementById('TheTownBicycle').style.borderStyle == 'inset') {
		end = end + "<br>" + 'The town bicycle,';
	}
	if(document.getElementById('FunInPublic').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Fun in public,';
	}
	if(document.getElementById('BasicBitch').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Basic bitch,';
	}
	if(document.getElementById('MegaBimbo').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Mega bimbo,';
	}
	if(document.getElementById('FullBodyStimulation').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Full body stimulation,';
	}
	if(document.getElementById('LatexCollar').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Latex collar,';
	}
	if(document.getElementById('SuperFertile').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Super fertile,';
	}
	if(document.getElementById('HSS').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Nothing suspicious here,';
		if(document.getElementById('Hear').checked == true) {
			end = end + "deaf";
		}
		if(document.getElementById('See').checked == true) {
			end = end + "blind";
		}
		if(document.getElementById('Speak').checked == true) {
			end = end + "mute";
		}
	}
	if(document.getElementById('JigglePhysics').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Jiggle physics,';
	}
	if(document.getElementById('LessThen').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Less then 20/20,';
	}
	if(document.getElementById('InterdimensionalTentacle').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Interdimensional tentacle rape,';
	}
	if(document.getElementById('LapseInConcentration').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Lapse in concentration,';
	}
	if(document.getElementById('DivineJudgment').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Divine judgment,';
	}
	end = end + "<br>";
	var Location = ['Fantasy','Future'];
	for(i=0;i<2;i++){
		if(document.getElementById(Location[i]).style.borderStyle == 'inset') {
			end = end + "<br>" + Location[i];
		}
	}
	if(document.getElementById('YOL').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Your old life';
	}
	if(document.getElementById('ModernWorld').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Modern world';
	}
	if(document.getElementById('ChooseYourOwn').style.borderStyle == 'inset') {
		end = end + "<br>" + 'Choose your own';
	}
	document.getElementById('MyPick').innerHTML = end;
}
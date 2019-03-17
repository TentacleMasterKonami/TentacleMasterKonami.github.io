var x = 10;
var y = 10;
var sex = ['Male','Female','Dickgirl','Herm'];
var RRace = ['Humans','Neko','Nephilim','Cambion','Kitsune','Dracokin','Witch'];
var race = ['Northerners','Highlanders','Lowlanders','Easterners','Elf','True-Vampire','Tribalist','Blondies','Cocos','Ferals','Scarlets','Strawberries','Snow-Kitty','Unicorn','Seraphim','Cherubs','Thrones','Dominions','Virtues','Powers','Principalities','Gluttony','Envy','Sloth','Wrath','Pride','Greed','Lust','The-Ado-Clan','The-Romo-Clan','The-Nymph-Clan','The-Joy-Clan','The-Vex-Clan','The-Phia-Clan','The-Piratio-Clan','Amethyst','Ruby','Elemental','Lavender','Soft-Shell','Dracodemon','Metallic','Arcane','Nature','Chaos','Divine','Spiritual','Martial','Psychisc'];
var bust = ['Flat','Small','Average','Big','Extra-Grande'];
var Butt = ['Non-existent','Cutesy','Toned','Bubbly','Thicc'];
var Physique = ['Fun-size','Pettie','Fit','Ripped','Curvy','Bimbolicious'];
var CCock = ['Small-er','Average-er','Large-er'];
var Pussy = ['So-Deep','Squirter','Virgin'];
var CClasses = ['Basic-Elementalism','Advanced-Elementalism','Illusionism','Deceiving-the-deceiver','The-Joys-of-Chronomancy','Playing-With-Time','Fighting-With-Your-Mind-Fist','A-Force-to-be-Reckoned-With','Alchemical-Principles','Advanced-Potions','Trap-Life','Marking-Your-Territory','Teleportation-Theory','Greater-Teleportation','Its-a-Bird','Soar-Like-an-Eagle','Standard-Transfiguration','Familiar-Territory','Greater-Familiar','Basic-Combat-Skills','Sharpshooting','Advanced-Swordplay','Knives-Scythes-and-Automobiles','Fighting-With-Your-Fist-Fist','Minor-Hypnosis','Living-Art','Dipsomancy-1','Dipsomancy-2','Blowing-Smoke','Holy-Smokes','Pop-The-Bubbly','Bursting-Bubbles','First-Aid','Stand-Tall','Survivalism-101','Bad-Blood','Empathy-For-Everyone','Divination','Probable-Predictions','Mind-Over-Matter','Let-There-Be-Light','Bound-By-Light','Light-The-Way','Itty-Bitty-Committee','Zoom-Zoom','Size-Play-101','I-Spy','Natures-Bounty','Making-Friends','One-With-Nature','Slime-Time','Goo-For-You','Be-Afraid-Of-The-Dark','From-The-Shadows-With-Love','Shadow-Possession','Charmed-Im-Sure'];
var sn = ['Scholar','Psychic','Beast-Master','Spellsword','Sniper','Bulwark','Blink-Mage','Druid','Battle-Healer','Aerial-Cavalry','Necromancer','Blood-Mage','Monk','Chaos-Mage','Mystic','Smoke-Mage','Bubble-Mage','Chronotank','Berserker','Potionist','Seductress','Prophet','Alchemist','Assassin','Gambler'];
var si = ['Pervy-Ele','Mental-Mistress','Harem-Master','Phallicist','Cupid','Mother-Nature','Portal-Mistress','Heal-Slut','Battle-Slut','Sadist','Lich','Vampire','Avatar-Of-Lust','Curse-Mage','Acolyte','Cum-Mage','Mermaid','Sex-Guru','Masochist','Love-Juicer','Harlot','Voyeur','Mastermind','Mind-Blanker','Game-Master'];
var SSpecial = ['Frothify-Loins','Earn-It','Monkey-See','Refractaway','Bimbo-Blast','Delayed-Gratification','Tentacle-Party','Bow','Target-Acquired','Nospineatol','Enlargital','Shapeshifting','Tail-Me-Dady','Taste-The-Rainbow','Neversore','Infertile','Hyperfertile','Flower-Blossom','Never-Enough-Holes','Milky','Mine','Cruel','Who-Needs-a-Gag-Reflex','Lickalotapus','Oral-Endowment','Cocktapus','Hung-Like-A-Horse','So-Knotty','Let-There-Be-Cock','Just-A-Sip','Up-All-Night','Rope-Bunny','Clenchify','Dullahan','Too-Good-To-Stop','Sword-Fighting','Goo-Shooter','Unfamiliar-Familiar','Sensory-Deprivation','Counter-Sigil','Ethereal-Dildos','My-Eyes-Are-Up-Here','Switcheroo','Art-of-the-Deal','Dual-Form','X-ray','Gooirific','Intoxicating-Smoke','Practically-Impractical','Always-Satisfying','Risky-Business','Phantom-Fuck','Fuck-You-Cold-Fluffy-White-bullshit','Really-Friendly-Animals','Enhanced-Possession'];
var Curses = ['Mirror','50/50','No-control','Hentai-Armor','Forever-a-Virgin','Butt-Slut','Always-Late','Always-Early','Cum-Baths','Selective-Hair-Growth','Behind-Open-Doors','Heavy-Conscince','Natures-Whore','Irresistible','Time-For-A-Change','Special-Ingredients','Spontaneous-Orgasms','Cum-Addict','Nothing-Is-Free','Exposed-Weakness','Haunting-Whore','Endless-Interruption','Aggressively-Horny','Cocknomore','Doppelganger','Size-Queen','New-Fetish','True-Thespian','Keeping-Things-Interesting','Oral-Fixation','Reverse-Polarity','Heat','Micro','Macro','Who-Needs-Orgasms','Cum-Drunk','Vagitarian','Experience-Check','Bimbofied','Unlucky','Its-Not-Gonna-Suck-Itself','Shinies','Tentacle-Magnet','A-Special-Kind-of-Monster'];
function Click(b, a, c, d) {
	if(document.getElementById(a).className == 'outset'){
        // do some stuff
        document.getElementById(a).className = 'inset';
        x = x + b
		for(i=0; i < d; i++) {
			document.getElementById(c[i]).disabled = true;
		}
    }
    else {
        // do some other stuff
        document.getElementById(a).className = 'outset';
        x = x - b
		for(i=0; i < d; i++) {
			document.getElementById(c[i]).disabled = false;
		}
    }
    document.getElementById("Points").innerHTML = x + " classes";
}
function Race(a, b, c, d) {
	if(document.getElementById(a).className == 'inset'){
		for(i=0; i < d; i++) {
			document.getElementById(c[i]).className = 'outset';
			document.getElementById(c[i]).disabled = false;
		}
	}
	else {
		for(i=0; i < d; i++) {
			document.getElementById(c[i]).className = 'outset';
			document.getElementById(c[i]).disabled = true;
		}
	}
}
function Classes(b, a, c) {
	if(document.getElementById(a).className == 'outset'){
        // do some stuff
        document.getElementById(a).className = 'inset';
        x = x - 1
		if(c[0]!=''){
			for(i=0; i < c.length; i++) {
				document.getElementById(c[i]).disabled = false;
			}
		}
    }
    else {
        // do some other stuff
        document.getElementById(a).className = 'outset';
        x = x + 1
		if(c[0]!=''){
			for(i=0; i < c.length; i++) {
				if(document.getElementById(c[i]).className == 'inset'){
					document.getElementById(c[i]).className = 'outset';
					x = x + 1;
				}
				document.getElementById(c[i]).disabled = true;
			}
		}
    }
	document.getElementById("Points").innerHTML = x + " classes";
}
function ClassesExtra(a, c){
	if(document.getElementById(a).className == 'inset'){
		if(c[0]!=''){
			for(i=0; i < c.length; i++) {
				document.getElementById(c[i]).disabled = false;
			}
		}
	} else {
		if(c[0]!=''){
			for(i=0; i < c.length; i++) {
				if(document.getElementById(c[i]).className == 'inset'){
					document.getElementById(c[i]).className = 'outset';
					y = y + 1;
				}
				document.getElementById(c[i]).disabled = true;
			}
		}
	}
	document.getElementById("Pages").innerHTML = y + " pages";
}
function Extra (a, b) {
	if(document.getElementById(b).className == 'outset'){
		for(i=0; i < a.length; i++) {
			if(document.getElementById(a[i]).className == 'inset'){
				document.getElementById(a[i]).className = 'outset';
				x = x + 1;
			}
			document.getElementById(a[i]).disabled = true;
		}
    }
}
function Special(b, a) {
	//PROPRIETERY CODE!!! DO NOT USE ELSWERE!!
	if(document.getElementById(b).className == 'outset') {
		for(i=0; i < a.length; i++){
			if(document.getElementById(a[i]).className == 'outset') {
				alert("Requierments not met");
				return;
			}
		}
		for(j=0; j < sn.length; j++){
			if(sn[j]==b){continue}
			document.getElementById(sn[j]).disabled = true;
		}
		document.getElementById(b).className = 'inset';
	}
	else {
		for(j=0; j < sn.length; j++){
			if(sn[j]==b){continue}
			document.getElementById(sn[j]).disabled = false;
		}
		document.getElementById(b).className = 'outset';
	}
	//PROPRIETERY CODE!!! DO NOT USE ELSWERE!!
}
/*function SpecialEX(a) {
	for(j=0; j < a.length; j++){
		if(document.getElementById(a).classname == 'inset') {
			for(i=0; i < s.length; i++){
				if(s[i]==b){continue}
				document.getElementById(s[i]).disabled = false;
			}
			document.getElementById(a).classname = 'outset';
			return;
		}
	}
}*/
function Lewd(a, c){
	if(document.getElementById(a).className == 'outset'){
        // do some stuff
        document.getElementById(a).className = 'inset';
        y = y - 1
		if(c[0]!=''){
			for(i=0; i < c.length; i++) {
				document.getElementById(c[i]).disabled = false;
			}
		}
    }
    else {
        // do some other stuff
        document.getElementById(a).className = 'outset';
        y = y + 1
		if(c[0]!=''){
			for(i=0; i < c.length; i++) {
				if(document.getElementById(c[i]).className == 'inset'){
					document.getElementById(c[i]).className = 'outset';
					y = y + 1;
				}
				document.getElementById(c[i]).disabled = true;
			}
		}
    }
	document.getElementById("Pages").innerHTML = y + " pages";
}
function ExtraSpecial (a, b) {
	if(document.getElementById(b).className == 'outset'){
		for(i=0; i < a.length; i++) {
			if(document.getElementById(a[i]).className == 'inset'){
				document.getElementById(a[i]).className = 'outset';
				y = y + 1;
			}
			document.getElementById(a[i]).disabled = true;
		}
    }
	document.getElementById("Pages").innerHTML = y + " pages";
}
function ExtraSpecialEX(a, b) {
	if(document.getElementById(b).className == 'outset'){
		for(i=0; i < a.length; i++) {
			if(document.getElementById(a[i]).className == 'inset'){
				document.getElementById(a[i]).className = 'outset';
				y = y + 1;
			}
			document.getElementById(a[i]).disabled = true;
		}
    }
	document.getElementById("Pages").innerHTML = y + " pages";
}
function SpecialEX(b, a) {
	if(document.getElementById(b).className == 'outset') {
		for(i=0; i < a.length; i++){
			if(document.getElementById(a[i]).className == 'outset') {
				alert("Requierments not met");
				return;
			}
		}
		for(j=0; j < si.length; j++){
			if(si[j]==b){continue}
			document.getElementById(si[j]).disabled = true;
		}
		document.getElementById(b).className = 'inset';
	} else {
		for(j=0; j < si.length; j++){
			if(si[j]==b){continue}
			document.getElementById(si[j]).disabled = false;
		}
		document.getElementById(b).className = 'outset';
	}
}
function Curse(a){
	if(document.getElementById(a).className == 'outset'){
        // do some stuff
        document.getElementById(a).className = 'inset';
        y = y + 1
    }
    else {
        // do some other stuff
        document.getElementById(a).className = 'outset';
        y = y - 1
    }
	document.getElementById("Pages").innerHTML = y + " pages";
}
function Cock(a, b){
	if(document.getElementById(a).className == 'inset'){
		document.getElementById(b).disabled = false;
	}
	else {
		if(document.getElementById(b).className == 'inset'){
			y = y - 1;
			document.getElementById(b).className = 'outset';
		}
		document.getElementById(b).disabled = true;
	}
	document.getElementById("Pages").innerHTML = y + " pages";
}
function end(){
	document.getElementById("end").innerHTML = "";
	document.getElementById("end").innerHTML += "SEX<br>";
	for(s=0; s < sex.length; s++){
		if(document.getElementById(sex[s]).className == 'inset'){
			document.getElementById("end").innerHTML += sex[s];
		}
	}
	document.getElementById("end").innerHTML += "<br><br>Race<br>";
	for(R=0; R < RRace.length; R++){
		if(document.getElementById(RRace[R]).className == 'inset'){
			document.getElementById("end").innerHTML += RRace[R] + "( ";
		}
	}
	for(r=0; r < race.length; r++){
		if(document.getElementById(race[r]).className == 'inset'){
			alert(race[r]);
			document.getElementById("end").innerHTML += race[r] + " )";
		}
	}
	document.getElementById("end").innerHTML += "<br><br>Bust<br>";
	for(b=0; b < bust.length; b++){
		if(document.getElementById(bust[b]).className == 'inset'){
			document.getElementById("end").innerHTML += bust[b];
		}
	}
	document.getElementById("end").innerHTML += "<br><br>Butt<br>";
	for(B=0; B < Butt.length; B++){
		if(document.getElementById(Butt[B]).className == 'inset'){
			document.getElementById("end").innerHTML += Butt[B];
		}
	}
	document.getElementById("end").innerHTML += "<br><br>Physique<br>";
	for(p=0; p < Physique.length; p++){
		if(document.getElementById(Physique[p]).className == 'inset'){
			document.getElementById("end").innerHTML += Physique[p];
		}
	}
	document.getElementById("end").innerHTML += "<br><br>Cock<br>";
	for(c=0; c < CCock.length; c++){
		if(document.getElementById(CCock[c]).className == 'inset'){
			document.getElementById("end").innerHTML += CCock[c];
		}
	}
	document.getElementById("end").innerHTML += "<br><br>Pussy<br>";
	for(P=0; P < Pussy.length; P++){
		if(document.getElementById(Pussy[P]).className == 'inset'){
			document.getElementById("end").innerHTML += Pussy[P];
		}
	}
	document.getElementById("end").innerHTML += "<br><br>Classes<br>";
	for(C=0; C < CClasses.length; C++){
		if(document.getElementById(CClasses[C]).className == 'inset'){
			document.getElementById("end").innerHTML += CClasses[C]+"<br>";
		}
	}
	document.getElementById("end").innerHTML += "<br>Specialization<br>";
	for(S=0; S < sn.length; S++){
		if(document.getElementById(sn[S]).className == 'inset'){
			document.getElementById("end").innerHTML += sn[S]+"<br>";
		}
	}
	document.getElementById("end").innerHTML += "<br>Special<br>";
	for(l=0; l < SSpecial.length; l++){
		if(document.getElementById(SSpecial[l]).className == 'inset'){
			document.getElementById("end").innerHTML += SSpecial[l]+"<br>";
		}
	}
	document.getElementById("end").innerHTML += '<br>Special"ization"<br>';
	for(L=0; L < si.length; L++){
		if(document.getElementById(si[L]).className == 'inset'){
			document.getElementById("end").innerHTML += si[L]+"<br>";
		}
	}
	document.getElementById("end").innerHTML += '<br>Curses<br>';
	for(CU=0; CU < Curses.length; CU++){
		if(document.getElementById(Curses[CU]).className == 'inset'){
			document.getElementById("end").innerHTML += Curses[CU]+"<br>";
		}
	}
}
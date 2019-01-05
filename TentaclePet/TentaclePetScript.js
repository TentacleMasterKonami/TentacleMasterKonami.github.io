var x = 30;
//var y = "You need to type something";
function myFunction() {
    alert(x);
}
function Req() {
    alert ("Requeirments not met");
}
function Update() {
    document.getElementById("demo").innerHTML = x + " points";
}
function MyPick() {
    document.getElementById('Intelligence').innerHTML = "";
    if(document.getElementById('TentacleMonster').style.borderStyle == 'inset'){
        
        document.getElementById('Intelligence').innerHTML = "Tentacle Monster <br>";
    }
    else if(document.getElementById('Instinctive').style.borderStyle == 'inset'){
        
        document.getElementById('Intelligence').innerHTML = "Instinctive <br>";
    }
    else if(document.getElementById('Standard').style.borderStyle == 'inset'){
        
        document.getElementById('Intelligence').innerHTML = "Standard <br>";
    }
    else if(document.getElementById('Smart').style.borderStyle == 'inset'){
        
        document.getElementById('Intelligence').innerHTML = "Smart <br>";
    }
    else if(document.getElementById('Sapient').style.borderStyle == 'inset'){
        
        document.getElementById('Intelligence').innerHTML = "Sapient <br>";
    }
    else {
        document.getElementById('Intelligence').innerHTML = "You have not selected any!";
    }
    document.getElementById('BodyType').innerHTML = "";
    if(document.getElementById('Blob').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Blob ";
    }
    if(document.getElementById('Beast').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Beast ";
    }
    if(document.getElementById('Insect').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Insect ";
    }
    if(document.getElementById('Human').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Human ";
    }
    if(document.getElementById('Humanoid').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Humanoid ";
    }
    if(document.getElementById('Suit').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Suit ";
    }
    if(document.getElementById('Swarm').style.borderStyle == 'inset'){
        
        var g = document.getElementById('SelectBox');
        var z = g.value;
        document.getElementById('BodyType').innerHTML += "Swarm, ";
        document.getElementById('BodyType').innerHTML += (z);
        document.getElementById('BodyType').innerHTML += " bodies";
    }
    if(document.getElementById('Plant').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Plant ";
    }
    if(document.getElementById('Slime').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Slime ";
    }
    if(document.getElementById('Robotic').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Robotic ";
    }
    if(document.getElementById('Room').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Room ";
    }
    if(document.getElementById('Symbiote').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Symbiote ";
    }
    if(document.getElementById('Shapeshifter').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "Shapeshifter ";
    }
    if(document.getElementById('Hybrid').style.borderStyle == 'inset'){
        
        document.getElementById('BodyType').innerHTML += "<br>Hybrid<br>";
    }
    if(document.getElementById('Miscellanious').style.borderStyle == 'inset'){
        
        //var y = document.getElementById("TextBox").getAttribute("value");
        var k = document.getElementById('TextBox');
        var y = k.value;
        document.getElementById('BodyType').innerHTML += "Miscellanious ";
        document.getElementById('BodyType').innerHTML += (y);
    }
    document.getElementById('BodySize').innerHTML = "";
    if(document.getElementById('Tiny').style.borderStyle == 'inset'){
        
        document.getElementById('BodySize').innerHTML = "Tiny <br>";
    }
    else if(document.getElementById('Small').style.borderStyle == 'inset'){
        
        document.getElementById('BodySize').innerHTML = "Small <br>";
    }
    else if(document.getElementById('Normal').style.borderStyle == 'inset'){
        
        document.getElementById('Intelligence').innerHTML = "Normal <br>";
    }
    else if(document.getElementById('Large').style.borderStyle == 'inset'){
        
        document.getElementById('BodySize').innerHTML = "Large <br>";
    }
    else if(document.getElementById('Massive').style.borderStyle == 'inset'){
        
        document.getElementById('BodySize').innerHTML = "Massive <br>";
    }
    else if(document.getElementById('MassShifter').style.borderStyle == 'inset'){
        
        document.getElementById('BodySize').innerHTML = "Mass Shifter <br>";
    }
    document.getElementById('TentacleTypes').innerHTML = "";
    if(document.getElementById('Tendrils').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Tendrils <br>";
    }
    if(document.getElementById('Exotic').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Exotic <br>";
    }
    if(document.getElementById('Large1').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Large <br>";
    }
    if(document.getElementById('Knotted').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Knotted <br>";
    }
    if(document.getElementById('Nubbed').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Nubbed <br>";
    }
    if(document.getElementById('Latch').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Latch <br>";
    }
    if(document.getElementById('Grabbers').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Grabbers <br>";
    }
    if(document.getElementById('Milker').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Milker <br>";
    }
    if(document.getElementById('Independent').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Independent <br>";
    }
    if(document.getElementById('Grinder').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Grinder <br>";
    }
    if(document.getElementById('Ribbed').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Ribbed <br>";
    }
    if(document.getElementById('Swallower').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Swallower <br>";
    }
    if(document.getElementById('Fuckhole').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Fuckhole <br>";
    }
    if(document.getElementById('Beaded').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Beaded <br>";
    }
    if(document.getElementById('Oviposition').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Oviposition <br>";
    }
    if(document.getElementById('Cilia').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Cilia <br>";
    }
    if(document.getElementById('Octopus').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Octopus <br>";
    }
    if(document.getElementById('Observer').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Observer <br>";
    }
    if(document.getElementById('Tongue').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML += "Tongue <br>";
    }
    if(document.getElementById('AllInOne').style.borderStyle == 'inset'){
        
        document.getElementById('TentacleTypes').innerHTML = "All-In-One Package <br>";
    }
    document.getElementById('Perks').innerHTML = "";
    if(document.getElementById('Fertile').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Fertile <br>";
    }
    if(document.getElementById('Womb').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Womb <br>";
    }
    if(document.getElementById('Drones').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Drones <br>";
    }
    if(document.getElementById('CumProduction').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Cum Production <br>";
    }
    if(document.getElementById('FluidProduction').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Fluid Production <br>";
    }
    if(document.getElementById('Vore').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Vore <br>";
    }
    if(document.getElementById('Webbing').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Webbing <br>";
    }
    if(document.getElementById('Vibrator').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Vibrator <br>";
    }
    if(document.getElementById('Restraint').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Restraint <br>";
    }
    if(document.getElementById('Sensitivity').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Sensitivity <br>";
    }
    if(document.getElementById('Nourishing').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Nourishing <br>";
    }
    if(document.getElementById('Tasty').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Tasty <br>";
    }
    if(document.getElementById('Reinvigorate').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Reinvigorate <br>";
    }
    if(document.getElementById('Comfy').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Comfy <br>";
    }
    if(document.getElementById('HeatRegulation').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Heat Regulation <br>";
    }
    if(document.getElementById('Summon').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Summon <br>";
    }
    if(document.getElementById('Bioluminescence').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Bioluminescence <br>";
    }
    if(document.getElementById('Amphibious').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Amphibious <br>";
    }
    if(document.getElementById('Strong').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Strong <br>";
    }
    if(document.getElementById('Flight').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Flight <br>";
    }
    if(document.getElementById('Chameleon').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Chameleon <br>";
    }
    if(document.getElementById('Aphrodisiac').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Aphrodisiac <br>";
    }
    if(document.getElementById('Lucidity').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Lucidity <br>";
    }
    if(document.getElementById('BodySwapping').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Body Swapping <br>";
    }
    if(document.getElementById('MindControl').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Mind Control <br>";
    }
    if(document.getElementById('BodyShaping').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Body Shaping <br>";
    }
    if(document.getElementById('Speech').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Speech <br>";
    }
    if(document.getElementById('PetSitter').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "PetSitter <br>";
    }
    if(document.getElementById('Cosplay').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Cosplay <br>";
    }
    if(document.getElementById('OutOfArea').style.borderStyle == 'inset'){
        
        document.getElementById('Perks').innerHTML += "Out Of Area Delivery <br>";
    }
    document.getElementById('Drawbacks').innerHTML = "";
    if(document.getElementById('FuckedSilly').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Fucked Silly <br>";
    }
    if(document.getElementById('Messy').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Messy <br>";
    }
    if(document.getElementById('Breeder').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Breeder <br>";
    }
    if(document.getElementById('Pheromones').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Pheromones <br>";
    }
    if(document.getElementById('Voracious').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Voracious <br>";
    }
    if(document.getElementById('Hypnosis').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Hypnosis <br>";
    }
    if(document.getElementById('Marathon').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Marathon <br>";
    }
    if(document.getElementById('Forceful').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Forceful <br>";
    }
    if(document.getElementById('BoxOfChocolates').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Box Of Chocolates <br>";
    }
    if(document.getElementById('Nightmares').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Nightmares <br>";
    }
    if(document.getElementById('GrowthHormones').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Growth Hormones <br>";
    }
    if(document.getElementById('Glutton').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Glutton <br>";
    }
    if(document.getElementById('Pervert').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Pervert <br>";
    }
    if(document.getElementById('Corruption').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Corruption <br>";
    }
    if(document.getElementById('Creepy').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Creepy <br>";
    }
    if(document.getElementById('RefractoryPeriod').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Refractory Period <br>";
    }
    if(document.getElementById('Drought').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Drought <br>";
    }
    if(document.getElementById('Aquatic').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Aquatic <br>";
    }
    if(document.getElementById('Nocturnal').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Nocturnal <br>";
    }
    if(document.getElementById('Immobile').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Immobile <br>";
    }
    if(document.getElementById('Clingy').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Clingy <br>";
    }
    if(document.getElementById('Jealous').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Jealous <br>";
    }
    if(document.getElementById('Shy').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Shy <br>";
    }
    if(document.getElementById('Sibling').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Sibling <br>";
    }
    if(document.getElementById('Harem').style.borderStyle == 'inset'){
        
        document.getElementById('Drawbacks').innerHTML += "Harem <br>";
    }
}
function TentacleMonster() {
    if(document.getElementById('TentacleMonster').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('TentacleMonster').style.borderStyle = 'inset';
        x = x + 8
        document.getElementById('Instinctive').disabled = true;
        document.getElementById('Standard').disabled = true;
        document.getElementById('Smart').disabled = true;
        document.getElementById('Sapient').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('TentacleMonster').style.borderStyle = 'outset';
        x = x - 8
        document.getElementById('Instinctive').disabled = false;
        document.getElementById('Standard').disabled = false;
        document.getElementById('Smart').disabled = false;
        document.getElementById('Sapient').disabled = false;
    }
    
}
function Instinctive() {
    if(document.getElementById('Instinctive').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Instinctive').style.borderStyle = 'inset';
        x = x + 4
        document.getElementById('TentacleMonster').disabled = true;
        document.getElementById('Standard').disabled = true;
        document.getElementById('Smart').disabled = true;
        document.getElementById('Sapient').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Instinctive').style.borderStyle = 'outset';
        x = x - 4
        document.getElementById('TentacleMonster').disabled = false;
        document.getElementById('Standard').disabled = false;
        document.getElementById('Smart').disabled = false;
        document.getElementById('Sapient').disabled = false;
    }
    
}
function Standard() {
    if(document.getElementById('Standard').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Standard').style.borderStyle = 'inset';
        document.getElementById('TentacleMonster').disabled = true;
        document.getElementById('Instinctive').disabled = true;
        document.getElementById('Smart').disabled = true;
        document.getElementById('Sapient').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Standard').style.borderStyle = 'outset';
        document.getElementById('TentacleMonster').disabled = false;
        document.getElementById('Instinctive').disabled = false;
        document.getElementById('Smart').disabled = false;
        document.getElementById('Sapient').disabled = false;
    }
    
}
function Smart() {
    if(document.getElementById('Smart').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Smart').style.borderStyle = 'inset';
        x = x - 4
        document.getElementById('TentacleMonster').disabled = true;
        document.getElementById('Instinctive').disabled = true;
        document.getElementById('Standard').disabled = true;
        document.getElementById('Sapient').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Smart').style.borderStyle = 'outset';
        x = x + 4
        document.getElementById('TentacleMonster').disabled = false;
        document.getElementById('Instinctive').disabled = false;
        document.getElementById('Standard').disabled = false;
        document.getElementById('Sapient').disabled = false;
    }
}
function Sapient() {
    if(document.getElementById('Sapient').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Sapient').style.borderStyle = 'inset';
        x = x - 8
        document.getElementById('TentacleMonster').disabled = true;
        document.getElementById('Instinctive').disabled = true;
        document.getElementById('Standard').disabled = true;
        document.getElementById('Smart').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Sapient').style.borderStyle = 'outset';
        x = x + 8
        document.getElementById('TentacleMonster').disabled = false;
        document.getElementById('Instinctive').disabled = false;
        document.getElementById('Standard').disabled = false;
        document.getElementById('Smart').disabled = false;
    }
}
function Blob() {
    if(document.getElementById('Blob').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Blob').style.borderStyle = 'inset';
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Blob').style.borderStyle = 'outset';
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
    }
    
}
function Beast() {
    if(document.getElementById('Beast').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Beast').style.borderStyle = 'inset';
        x = x + 2;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Beast').style.borderStyle = 'outset';
        x = x - 2;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
    }
    
}
function Insect() {
    if(document.getElementById('Insect').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Insect').style.borderStyle = 'inset';
        x = x + 2;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Insect').style.borderStyle = 'outset';
        x = x - 2;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
    }
    
}
function Human() {
    if(document.getElementById('Human').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Human').style.borderStyle = 'inset';
        x = x - 4;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Human').style.borderStyle = 'outset';
        x = x + 4;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
    }
    if(document.getElementById('Womb').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Womb').style.borderStyle = 'outset';
        x = x + 3
    }
    
}
function Humanoid() {
    if(document.getElementById('Humanoid').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Humanoid').style.borderStyle = 'inset';
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Humanoid').style.borderStyle = 'outset';
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
    }
    
}
function Suit() {
    if(document.getElementById('Suit').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Suit').style.borderStyle = 'inset';
        x = x + 4;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Suit').style.borderStyle = 'outset';
        x = x - 4;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
    }
    
}
function Swarm() {
    if(document.getElementById('Swarm').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Swarm').style.borderStyle = 'inset';
        x = x - 2;
        document.getElementById('Hybrid').disabled = true
        document.getElementById('Miscellanious').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Swarm').style.borderStyle = 'outset';
        x = x + 2;
        document.getElementById('Hybrid').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
    }
    
}
function Plant() {
    if(document.getElementById('Plant').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Plant').style.borderStyle = 'inset';
        x = x + 2;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Plant').style.borderStyle = 'outset';
        x = x - 2;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
    }
    
}
function Slime() {
    if(document.getElementById('Slime').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Slime').style.borderStyle = 'inset';
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Slime').style.borderStyle = 'outset';
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
    }
    
}
function Robotic() {
    if(document.getElementById('Robotic').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Robotic').style.borderStyle = 'inset';
        x = x + 2;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Robotic').style.borderStyle = 'outset';
        x = x - 2;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
    }
    
}
function Room() {
    if(document.getElementById('Room').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Room').style.borderStyle = 'inset';
        x = x + 4;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
        document.getElementById('Tiny').disabled = true;
        document.getElementById('Small').disabled = true;
        document.getElementById('Normal').disabled = true;
        document.getElementById('Large').disabled = true;
        document.getElementById('Massive').disabled = true;
        document.getElementById('MassShifter').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Room').style.borderStyle = 'outset';
        x = x - 4;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
        document.getElementById('Tiny').disabled = false;
        document.getElementById('Small').disabled = false;
        document.getElementById('Normal').disabled = false;
        document.getElementById('Large').disabled = false;
        document.getElementById('Massive').disabled = false;
        document.getElementById('MassShifter').disabled = false;
    }
    
}
function Symbiote() {
    if(document.getElementById('Symbiote').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Symbiote').style.borderStyle = 'inset';
        x = x - 8;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
        document.getElementById('Tiny').disabled = true;
        document.getElementById('Small').disabled = true;
        document.getElementById('Normal').disabled = true;
        document.getElementById('Large').disabled = true;
        document.getElementById('Massive').disabled = true;
        document.getElementById('MassShifter').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Symbiote').style.borderStyle = 'outset';
        x = x + 8;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
        document.getElementById('Tiny').disabled = false;
        document.getElementById('Small').disabled = false;
        document.getElementById('Normal').disabled = false;
        document.getElementById('Large').disabled = false;
        document.getElementById('Massive').disabled = false;
        document.getElementById('MassShifter').disabled = false;
    }
    
}
function Shapeshifter() {
    if(document.getElementById('Shapeshifter').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Shapeshifter').style.borderStyle = 'inset';
        x = x - 10;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Miscellanious').disabled = true;
        document.getElementById('Hybrid').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Shapeshifter').style.borderStyle = 'outset';
        x = x + 10;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Miscellanious').disabled = false;
        document.getElementById('Hybrid').disabled = false;
    }
    
}
function Hybrid() {
    if(document.getElementById('Hybrid').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Hybrid').style.borderStyle = 'inset';
        x = x - 4;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
    }
    else {
        // do some other stuff
        document.getElementById('Hybrid').style.borderStyle = 'outset';
        x = x + 4;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
    }
    
}
function Miscellanious() {
    if(document.getElementById('Miscellanious').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Miscellanious').style.borderStyle = 'inset';
        x = x - 3;
        document.getElementById('Blob').disabled = true;
        document.getElementById('Beast').disabled = true;
        document.getElementById('Insect').disabled = true;
        document.getElementById('Human').disabled = true;
        document.getElementById('Humanoid').disabled = true;
        document.getElementById('Suit').disabled = true;
        document.getElementById('Swarm').disabled = true;
        document.getElementById('Plant').disabled = true;
        document.getElementById('Slime').disabled = true;
        document.getElementById('Robotic').disabled = true;
        document.getElementById('Room').disabled = true;
        document.getElementById('Symbiote').disabled = true;
        document.getElementById('Shapeshifter').disabled = true;
        document.getElementById('Hybrid').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Miscellanious').style.borderStyle = 'outset';
        x = x + 3;
        document.getElementById('Blob').disabled = false;
        document.getElementById('Beast').disabled = false;
        document.getElementById('Insect').disabled = false;
        document.getElementById('Human').disabled = false;
        document.getElementById('Humanoid').disabled = false;
        document.getElementById('Suit').disabled = false;
        document.getElementById('Swarm').disabled = false;
        document.getElementById('Plant').disabled = false;
        document.getElementById('Slime').disabled = false;
        document.getElementById('Robotic').disabled = false;
        document.getElementById('Room').disabled = false;
        document.getElementById('Symbiote').disabled = false;
        document.getElementById('Shapeshifter').disabled = false;
        document.getElementById('Hybrid').disabled = false;
    }
    
}
function Tiny() {
    if(document.getElementById('Tiny').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Tiny').style.borderStyle = 'inset';
        x = x + 6
        document.getElementById('Small').disabled = true;
        document.getElementById('Normal').disabled = true;
        document.getElementById('Large').disabled = true;
        document.getElementById('Massive').disabled = true;
        document.getElementById('MassShifter').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Tiny').style.borderStyle = 'outset';
        x = x - 6
        document.getElementById('Small').disabled = false;
        document.getElementById('Normal').disabled = false;
        document.getElementById('Large').disabled = false;
        document.getElementById('Massive').disabled = false;
        document.getElementById('MassShifter').disabled = false;
    }
    
}
function Small() {
    if(document.getElementById('Small').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Small').style.borderStyle = 'inset';
        x = x + 3
        document.getElementById('Tiny').disabled = true;
        document.getElementById('Normal').disabled = true;
        document.getElementById('Large').disabled = true;
        document.getElementById('Massive').disabled = true;
        document.getElementById('MassShifter').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Small').style.borderStyle = 'outset';
        x = x - 3
        document.getElementById('Tiny').disabled = false;
        document.getElementById('Normal').disabled = false;
        document.getElementById('Large').disabled = false;
        document.getElementById('Massive').disabled = false;
        document.getElementById('MassShifter').disabled = false;
    }
    
}
function Normal() {
    if(document.getElementById('Normal').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Normal').style.borderStyle = 'inset';
        document.getElementById('Tiny').disabled = true;
        document.getElementById('Small').disabled = true;
        document.getElementById('Large').disabled = true;
        document.getElementById('Massive').disabled = true;
        document.getElementById('MassShifter').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Normal').style.borderStyle = 'outset';
        document.getElementById('Tiny').disabled = false;
        document.getElementById('Small').disabled = false;
        document.getElementById('Large').disabled = false;
        document.getElementById('Massive').disabled = false;
        document.getElementById('MassShifter').disabled = false;
    }
    
}
function Large() {
    if(document.getElementById('Large').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Large').style.borderStyle = 'inset';
        x = x + 5
        document.getElementById('Tiny').disabled = true;
        document.getElementById('Small').disabled = true;
        document.getElementById('Normal').disabled = true;
        document.getElementById('Massive').disabled = true;
        document.getElementById('MassShifter').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Large').style.borderStyle = 'outset';
        x = x - 5
        document.getElementById('Tiny').disabled = false;
        document.getElementById('Small').disabled = false;
        document.getElementById('Normal').disabled = false;
        document.getElementById('Massive').disabled = false;
        document.getElementById('MassShifter').disabled = false;
    }
    
}
function Massive() {
    if(document.getElementById('Massive').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Massive').style.borderStyle = 'inset';
        x = x + 10
        document.getElementById('Tiny').disabled = true;
        document.getElementById('Small').disabled = true;
        document.getElementById('Normal').disabled = true;
        document.getElementById('Large').disabled = true;
        document.getElementById('MassShifter').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('Massive').style.borderStyle = 'outset';
        x = x - 10
        document.getElementById('Tiny').disabled = false;
        document.getElementById('Small').disabled = false;
        document.getElementById('Normal').disabled = false;
        document.getElementById('Large').disabled = false;
        document.getElementById('MassShifter').disabled = false;
    }
    
}
function MassShifter() {
    if(document.getElementById('MassShifter').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('MassShifter').style.borderStyle = 'inset';
        x = x - 4
        document.getElementById('Tiny').disabled = true;
        document.getElementById('Small').disabled = true;
        document.getElementById('Normal').disabled = true;
        document.getElementById('Large').disabled = true;
        document.getElementById('Massive').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('MassShifter').style.borderStyle = 'outset';
        x = x + 4
        document.getElementById('Tiny').disabled = false;
        document.getElementById('Small').disabled = false;
        document.getElementById('Normal').disabled = false;
        document.getElementById('Large').disabled = false;
        document.getElementById('Massive').disabled = false;
    }
    
}
function Tendrils() {
    if(document.getElementById('Tendrils').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Tendrils').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Tendrils').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Exotic() {
    if(document.getElementById('Exotic').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Exotic').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Exotic').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Large1() {
    if(document.getElementById('Large1').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Large1').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Large1').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Knotted() {
    if(document.getElementById('Knotted').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Knotted').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Knotted').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Nubbed() {
    if(document.getElementById('Nubbed').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Nubbed').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Nubbed').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Latch() {
    if(document.getElementById('Latch').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Latch').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Latch').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Grabbers() {
    if(document.getElementById('Grabbers').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Grabbers').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Grabbers').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Milker() {
    if(document.getElementById('Milker').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Milker').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Milker').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Womb').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Womb').style.borderStyle = 'outset';
        x = x + 3
    }
    
}
function Independent() {
    if(document.getElementById('Independent').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Independent').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Independent').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Grinder() {
    if(document.getElementById('Grinder').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Grinder').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Grinder').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Ribbed() {
    if(document.getElementById('Ribbed').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Ribbed').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Ribbed').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Swallower() {
    if(document.getElementById('Swallower').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Swallower').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Swallower').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Voracious').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Voracious').style.borderStyle = 'outset';
        x = x - 4
    }
}
function Fuckhole() {
    if(document.getElementById('Fuckhole').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Fuckhole').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Fuckhole').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Womb').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Womb').style.borderStyle = 'outset';
        x = x + 3
    }
    
}
function Beaded() {
    if(document.getElementById('Beaded').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Beaded').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Beaded').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Oviposition() {
    if(document.getElementById('Oviposition').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Oviposition').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Oviposition').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Cilia() {
    if(document.getElementById('Cilia').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Cilia').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Cilia').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Octopus() {
    if(document.getElementById('Octopus').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Octopus').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Octopus').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Observer() {
    if(document.getElementById('Observer').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Observer').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Observer').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Tongue() {
    if(document.getElementById('Tongue').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Tongue').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Tongue').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function AllInOne() {
    if(document.getElementById('AllInOne').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('AllInOne').style.borderStyle = 'inset';
        x = x - 12
        document.getElementById('Tendrils').disabled = true;
        document.getElementById('Exotic').disabled = true;
        document.getElementById('Large1').disabled = true;
        document.getElementById('Knotted').disabled = true;
        document.getElementById('Nubbed').disabled = true;
        //visibility
        document.getElementById('Latch').disabled = true;
        document.getElementById('Grabbers').disabled = true;
        document.getElementById('Milker').disabled = true;
        document.getElementById('Independent').disabled = true;
        document.getElementById('Grinder').disabled = true;
        //visibility
        document.getElementById('Ribbed').disabled = true;
        document.getElementById('Swallower').disabled = true;
        document.getElementById('Fuckhole').disabled = true;
        document.getElementById('Beaded').disabled = true;
        document.getElementById('Oviposition').disabled = true;
        //visibility
        document.getElementById('Cilia').disabled = true;
        document.getElementById('Octopus').disabled = true;
        document.getElementById('Observer').disabled = true;
        document.getElementById('Tongue').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('AllInOne').style.borderStyle = 'outset';
        x = x + 12
        document.getElementById('Tendrils').disabled = false;
        document.getElementById('Exotic').disabled = false;
        document.getElementById('Large1').disabled = false;
        document.getElementById('Knotted').disabled = false;
        document.getElementById('Nubbed').disabled = false;
        //visibility
        document.getElementById('Latch').disabled = false;
        document.getElementById('Grabbers').disabled = false;
        document.getElementById('Milker').disabled = false;
        document.getElementById('Independent').disabled = false;
        document.getElementById('Grinder').disabled = false;
        //visibility
        document.getElementById('Ribbed').disabled = false;
        document.getElementById('Swallower').disabled = false;
        document.getElementById('Fuckhole').disabled = false;
        document.getElementById('Beaded').disabled = false;
        document.getElementById('Oviposition').disabled = false;
        //visibility
        document.getElementById('Cilia').disabled = false;
        document.getElementById('Octopus').disabled = false;
        document.getElementById('Observer').disabled = false;
        document.getElementById('Tongue').disabled = false;
    }
    if(document.getElementById('Tendrils').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Tendrils').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Exotic').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Exotic').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Large1').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Large1').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Knotted').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Knotted').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Nubbed').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Nubbed').style.borderStyle = 'outset';
        x = x + 1
    }
    //visibility
    //visibility
    if(document.getElementById('Latch').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Latch').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Grabbers').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Grabbers').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Milker').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Milker').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Independent').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Independent').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Grinder').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Grinder').style.borderStyle = 'outset';
        x = x + 1
    }
    //visibility
    //visibility
    if(document.getElementById('Ribbed').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Ribbed').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Swallower').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Swallower').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Fuckhole').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Fuckhole').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Beaded').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Beaded').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Oviposition').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Oviposition').style.borderStyle = 'outset';
        x = x + 1
    }
    //visibility
    //visibility
    if(document.getElementById('Cilia').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Cilia').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Octopus').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Octopus').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Observer').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Observer').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('Tongue').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Tongue').style.borderStyle = 'outset';
        x = x + 1
    }
    if(document.getElementById('BoxOfChocolates').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('BoxOfChocolates').style.borderStyle = 'outset';
        x = x - 6
    }
    if(document.getElementById('Womb').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Womb').style.borderStyle = 'outset';
        x = x + 3
    }
    if(document.getElementById('Voracious').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Voracious').style.borderStyle = 'outset';
        x = x - 4
    }
}
function Fertile() {
    if(document.getElementById('Fertile').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Fertile').style.borderStyle = 'inset';
        x = x - 4
    }
    else {
        // do some other stuff
        document.getElementById('Fertile').style.borderStyle = 'outset';
        x = x + 4
    }
    if(document.getElementById('Drones').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Drones').style.borderStyle = 'outset';
        x = x + 2
    }
    if(document.getElementById('Breeder').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Breeder').style.borderStyle = 'outset';
        x = x - 6
    }
    
}
function Womb() {
    if(!(document.getElementById('Human').style.borderStyle == 'inset' || document.getElementById('Milker').style.borderStyle == 'inset' || document.getElementById('Fuckhole').style.borderStyle == 'inset' || document.getElementById('AllInOne').style.borderStyle == 'inset')){
        // do some stuff
        Req();
    }
    else if(document.getElementById('Womb').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Womb').style.borderStyle = 'inset';
        x = x - 3
    }
    else {
        // do some other stuff
        document.getElementById('Womb').style.borderStyle = 'outset';
        x = x + 3
    }
    
}
function Drones() {
    if(!(document.getElementById('Fertile').style.borderStyle == 'inset' || document.getElementById('Womb').style.borderStyle == 'inset')){
        // do some stuff
        Req();
    }
    else if(document.getElementById('Drones').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Drones').style.borderStyle = 'inset';
        x = x - 2
    }
    else {
        // do some other stuff
        document.getElementById('Drones').style.borderStyle = 'outset';
        x = x + 2
    }
    
}
function CumProduction() {
    if(document.getElementById('CumProduction').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('CumProduction').style.borderStyle = 'inset';
        x = x - 2
        document.getElementById('Messy').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('CumProduction').style.borderStyle = 'outset';
        x = x + 2
        document.getElementById('Messy').disabled = false;
    }
    
}
function FluidProduction() {
    if(document.getElementById('FluidProduction').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('FluidProduction').style.borderStyle = 'inset';
        x = x - 1
        document.getElementById('GrowthHormones').disabled = true;
    }
    else {
        // do some other stuff
        document.getElementById('FluidProduction').style.borderStyle = 'outset';
        x = x + 1
        document.getElementById('GrowthHormones').disabled = false;
    }
    
}
function Vore() {
    if((document.getElementById('Tiny').style.borderStyle == 'inset' || document.getElementById('Small').style.borderStyle == 'inset')){
        // do some stuff
        Req();
    }
    else if(document.getElementById('Vore').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Vore').style.borderStyle = 'inset';
        x = x - 2
    }
    else {
        // do some other stuff
        document.getElementById('Vore').style.borderStyle = 'outset';
        x = x + 2
    }
    if(document.getElementById('Voracious').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Voracious').style.borderStyle = 'outset';
        x = x - 4
    }
}
function Webbing() {
    if(document.getElementById('Webbing').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Webbing').style.borderStyle = 'inset';
        x = x - 2
    }
    else {
        // do some other stuff
        document.getElementById('Webbing').style.borderStyle = 'outset';
        x = x + 2
    }
    
}
function Vibrator() {
    if(document.getElementById('Vibrator').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Vibrator').style.borderStyle = 'inset';
        x = x - 2
    }
    else {
        // do some other stuff
        document.getElementById('Vibrator').style.borderStyle = 'outset';
        x = x + 2
    }
    
}
function Restraint() {
    if(document.getElementById('Restraint').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Restraint').style.borderStyle = 'inset';
        x = x - 2
    }
    else {
        // do some other stuff
        document.getElementById('Restraint').style.borderStyle = 'outset';
        x = x + 2
    }
    
}
function Sensitivity() {
    if(document.getElementById('Sensitivity').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Sensitivity').style.borderStyle = 'inset';
        x = x - 2
    }
    else {
        // do some other stuff
        document.getElementById('Sensitivity').style.borderStyle = 'outset';
        x = x + 2
    }
    
}
function Nourishing() {
    if(document.getElementById('Nourishing').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Nourishing').style.borderStyle = 'inset';
        x = x - 3
    }
    else {
        // do some other stuff
        document.getElementById('Nourishing').style.borderStyle = 'outset';
        x = x + 3
    }
    
}
function Tasty() {
    if(document.getElementById('Tasty').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Tasty').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Tasty').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Reinvigorate() {
    if(document.getElementById('Reinvigorate').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Reinvigorate').style.borderStyle = 'inset';
        x = x - 4
    }
    else {
        // do some other stuff
        document.getElementById('Reinvigorate').style.borderStyle = 'outset';
        x = x + 4
    }
    
}
function Comfy() {
    if(document.getElementById('Comfy').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Comfy').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Comfy').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function HeatRegulation() {
    if(document.getElementById('HeatRegulation').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('HeatRegulation').style.borderStyle = 'inset';
        x = x - 2
    }
    else {
        // do some other stuff
        document.getElementById('HeatRegulation').style.borderStyle = 'outset';
        x = x + 2
    }
    
}function Summon() {
    if(document.getElementById('Summon').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Summon').style.borderStyle = 'inset';
        x = x - 4
    }
    else {
        // do some other stuff
        document.getElementById('Summon').style.borderStyle = 'outset';
        x = x + 4
    }
    
}
function Bioluminescence() {
    if(document.getElementById('Bioluminescence').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Bioluminescence').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Bioluminescence').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function Amphibious() {
    if(document.getElementById('Amphibious').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Amphibious').style.borderStyle = 'inset';
        x = x - 2
    }
    else {
        // do some other stuff
        document.getElementById('Amphibious').style.borderStyle = 'outset';
        x = x + 2
    }
    
}
function Strong() {
    if(document.getElementById('Strong').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Strong').style.borderStyle = 'inset';
        x = x - 4
    }
    else {
        // do some other stuff
        document.getElementById('Strong').style.borderStyle = 'outset';
        x = x + 4
    }
    
}
function Flight() {
    if(document.getElementById('Flight').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Flight').style.borderStyle = 'inset';
        x = x - 3
    }
    else {
        // do some other stuff
        document.getElementById('Flight').style.borderStyle = 'outset';
        x = x + 3
    }
    
}
function Chameleon() {
    if(document.getElementById('Chameleon').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Chameleon').style.borderStyle = 'inset';
        x = x - 3
    }
    else {
        // do some other stuff
        document.getElementById('Chameleon').style.borderStyle = 'outset';
        x = x + 3
    }
    
}
function Aphrodisiac() {
    if(document.getElementById('Aphrodisiac').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Aphrodisiac').style.borderStyle = 'inset';
        x = x - 3
    }
    else {
        // do some other stuff
        document.getElementById('Aphrodisiac').style.borderStyle = 'outset';
        x = x + 3
    }
    if(document.getElementById('Pheromones').style.borderStyle == 'inset'){
        // do some stuff
        document.getElementById('Pheromones').style.borderStyle = 'outset';
        x = x - 4
    }
}
function Lucidity() {
    if(document.getElementById('Lucidity').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Lucidity').style.borderStyle = 'inset';
        x = x - 3
    }
    else {
        // do some other stuff
        document.getElementById('Lucidity').style.borderStyle = 'outset';
        x = x + 3
    }
    
}
function BodySwapping() {
    if(document.getElementById('BodySwapping').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('BodySwapping').style.borderStyle = 'inset';
        x = x - 3
    }
    else {
        // do some other stuff
        document.getElementById('BodySwapping').style.borderStyle = 'outset';
        x = x + 3
    }
    
}
function MindControl() {
    if(document.getElementById('MindControl').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('MindControl').style.borderStyle = 'inset';
        x = x - 5
    }
    else {
        // do some other stuff
        document.getElementById('MindControl').style.borderStyle = 'outset';
        x = x + 5
    }
    
}
function BodyShaping() {
    if(document.getElementById('BodyShaping').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('BodyShaping').style.borderStyle = 'inset';
        x = x - 4
    }
    else {
        // do some other stuff
        document.getElementById('BodyShaping').style.borderStyle = 'outset';
        x = x + 4
    }
    
}
function Speech() {
    if(document.getElementById('Speech').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Speech').style.borderStyle = 'inset';
        x = x - 1
    }
    else {
        // do some other stuff
        document.getElementById('Speech').style.borderStyle = 'outset';
        x = x + 1
    }
    
}
function PetSitter() {
    if(document.getElementById('PetSitter').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('PetSitter').style.borderStyle = 'inset';
        x = x - 4
    }
    else {
        // do some other stuff
        document.getElementById('PetSitter').style.borderStyle = 'outset';
        x = x + 4
    }
    
}
function Cosplay() {
    if(document.getElementById('Cosplay').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Cosplay').style.borderStyle = 'inset';
        x = x - 3
    }
    else {
        // do some other stuff
        document.getElementById('Cosplay').style.borderStyle = 'outset';
        x = x + 3
    }
    
}
function OutOfArea() {
    if(document.getElementById('OutOfArea').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('OutOfArea').style.borderStyle = 'inset';
        x = x - 5
    }
    else {
        // do some other stuff
        document.getElementById('OutOfArea').style.borderStyle = 'outset';
        x = x + 5
    }
    
}
function FuckedSilly() {
    if(document.getElementById('FuckedSilly').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('FuckedSilly').style.borderStyle = 'inset';
        x = x + 2
    }
    else {
        // do some other stuff
        document.getElementById('FuckedSilly').style.borderStyle = 'outset';
        x = x - 2
    }
    
}
function Messy() {
    if(document.getElementById('Messy').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Messy').style.borderStyle = 'inset';
        x = x + 2
    }
    else {
        // do some other stuff
        document.getElementById('Messy').style.borderStyle = 'outset';
        x = x - 2
    }
    
}
function Breeder() {
    if(document.getElementById('Fertile').style.borderStyle == 'outset') {
        // do some stuff
        Req();
    }
    else if(document.getElementById('Breeder').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Breeder').style.borderStyle = 'inset';
        x = x + 6
    }
    else {
        // do some other stuff
        document.getElementById('Breeder').style.borderStyle = 'outset';
        x = x - 6
    }
}
function Pheromones() {
    if(document.getElementById('Aphrodisiac').style.borderStyle == 'outset') {
        // do some stuff
        Req();
    }
    else if(document.getElementById('Pheromones').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Pheromones').style.borderStyle = 'inset';
        x = x + 4
    }
    else {
        // do some other stuff
        document.getElementById('Pheromones').style.borderStyle = 'outset';
        x = x - 4
    }
}
function Voracious() {
    if(!(document.getElementById('Vore').style.borderStyle == 'inset' || document.getElementById('Swallower').style.borderStyle == 'inset' || document.getElementById('AllInOne').style.borderStyle == 'inset')){
        // do some stuff
        Req();
    }
    else if(document.getElementById('Voracious').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Voracious').style.borderStyle = 'inset';
        x = x + 4
    }
    else {
        // do some other stuff
        document.getElementById('Voracious').style.borderStyle = 'outset';
        x = x - 4
    }
    
}
function Hypnosis() {
    if(document.getElementById('Hypnosis').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Hypnosis').style.borderStyle = 'inset';
        x = x + 2
    }
    else {
        // do some other stuff
        document.getElementById('Hypnosis').style.borderStyle = 'outset';
        x = x - 2
    }
    
}
function Marathon() {
    if(document.getElementById('Marathon').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Marathon').style.borderStyle = 'inset';
        x = x + 3
    }
    else {
        // do some other stuff
        document.getElementById('Marathon').style.borderStyle = 'outset';
        x = x - 3
    }
    
}
function Forceful() {
    if((document.getElementById('TentacleMonster').style.borderStyle == 'inset' || document.getElementById('Instinctive').style.borderStyle == 'inset')){
        // do some stuff
        Req();
    }
    else if(document.getElementById('Forceful').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Forceful').style.borderStyle = 'inset';
        x = x + 3
    }
    else {
        // do some other stuff
        document.getElementById('Forceful').style.borderStyle = 'outset';
        x = x - 3
    }
    
}
function BoxOfChocolates() {
    if(document.getElementById('AllInOne').style.borderStyle == 'outset'){
        // do some stuff
        Req();
    }
    else if(document.getElementById('BoxOfChocolates').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('BoxOfChocolates').style.borderStyle = 'inset';
        x = x + 6
    }
    else {
        // do some other stuff
        document.getElementById('BoxOfChocolates').style.borderStyle = 'outset';
        x = x - 6
    }
    
}
function Nightmares() {
    if(document.getElementById('Nightmares').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Nightmares').style.borderStyle = 'inset';
        x = x + 2
    }
    else {
        // do some other stuff
        document.getElementById('Nightmares').style.borderStyle = 'outset';
        x = x - 2
    }
    
}
function GrowthHormones() {
    if(document.getElementById('GrowthHormones').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('GrowthHormones').style.borderStyle = 'inset';
        x = x + 3
    }
    else {
        // do some other stuff
        document.getElementById('GrowthHormones').style.borderStyle = 'outset';
        x = x - 3
    }
    
}
function Glutton() {
    if(document.getElementById('Glutton').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Glutton').style.borderStyle = 'inset';
        x = x + 3
    }
    else {
        // do some other stuff
        document.getElementById('Glutton').style.borderStyle = 'outset';
        x = x - 3
    }
    
}
function Pervert() {
    if(document.getElementById('Pervert').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Pervert').style.borderStyle = 'inset';
        x = x + 2
    }
    else {
        // do some other stuff
        document.getElementById('Pervert').style.borderStyle = 'outset';
        x = x - 2
    }
    
}
function Corruption() {
    if(document.getElementById('Corruption').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Corruption').style.borderStyle = 'inset';
        x = x + 3
    }
    else {
        // do some other stuff
        document.getElementById('Corruption').style.borderStyle = 'outset';
        x = x - 3
    }
    
}
function Creepy() {
    if(document.getElementById('Creepy').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Creepy').style.borderStyle = 'inset';
        x = x + 1
    }
    else {
        // do some other stuff
        document.getElementById('Creepy').style.borderStyle = 'outset';
        x = x - 1
    }
    
}
function RefractoryPeriod() {
    if((document.getElementById('Marathon').style.borderStyle == 'inset' || document.getElementById('Glutton').style.borderStyle == 'inset')){
        // do some stuff
        Req();
    }
    else if(document.getElementById('RefractoryPeriod').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('RefractoryPeriod').style.borderStyle = 'inset';
        x = x + 4
    }
    else {
        // do some other stuff
        document.getElementById('RefractoryPeriod').style.borderStyle = 'outset';
        x = x - 4
    }
    
}
function Drought() {
    if((document.getElementById('Messy').style.borderStyle == 'inset' || document.getElementById('Fertile').style.borderStyle == 'inset' || document.getElementById('CumProduction').style.borderStyle == 'inset' || document.getElementById('Nourishing').style.borderStyle == 'inset' || document.getElementById('Tasty').style.borderStyle == 'inset')){
        // do some stuff
        Req();
    }
    else if(document.getElementById('Drought').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Drought').style.borderStyle = 'inset';
        x = x + 2
    }
    else {
        // do some other stuff
        document.getElementById('Drought').style.borderStyle = 'outset';
        x = x - 2
    }
    
}
function Aquatic() {
    if(document.getElementById('Amphibious').style.borderStyle == 'inset'){
        // do some stuff
        Req();
    }
    else if(document.getElementById('Aquatic').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Aquatic').style.borderStyle = 'inset';
        x = x + 6
    }
    else {
        // do some other stuff
        document.getElementById('Aquatic').style.borderStyle = 'outset';
        x = x - 6
    }
    
}
function Nocturnal() {
    if(document.getElementById('Nocturnal').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Nocturnal').style.borderStyle = 'inset';
        x = x + 1
    }
    else {
        // do some other stuff
        document.getElementById('Nocturnal').style.borderStyle = 'outset';
        x = x - 1
    }
    
}
function Immobile() {
    if(document.getElementById('Immobile').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Immobile').style.borderStyle = 'inset';
        x = x + 4
    }
    else {
        // do some other stuff
        document.getElementById('Immobile').style.borderStyle = 'outset';
        x = x - 4
    }
    
}
function Clingy() {
    if(document.getElementById('Symbiote').style.borderStyle == 'inset'){
        // do some stuff
        Req();
    }
    else if(document.getElementById('Clingy').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Clingy').style.borderStyle = 'inset';
        x = x + 3
    }
    else {
        // do some other stuff
        document.getElementById('Clingy').style.borderStyle = 'outset';
        x = x - 3
    }
    
}
function Jealous() {
    if(document.getElementById('Jealous').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Jealous').style.borderStyle = 'inset';
        x = x + 2
    }
    else {
        // do some other stuff
        document.getElementById('Jealous').style.borderStyle = 'outset';
        x = x - 2
    }
    
}
function Shy() {
    if(document.getElementById('Shy').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Shy').style.borderStyle = 'inset';
        x = x + 2
    }
    else {
        // do some other stuff
        document.getElementById('Shy').style.borderStyle = 'outset';
        x = x - 2
    }
    
}
function Sibling() {
    if(document.getElementById('Sibling').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Sibling').style.borderStyle = 'inset';
        x = x + 3
    }
    else {
        // do some other stuff
        document.getElementById('Sibling').style.borderStyle = 'outset';
        x = x - 3
    }
    
}
function Harem() {
    if(document.getElementById('Harem').style.borderStyle == 'outset'){
        // do some stuff
        document.getElementById('Harem').style.borderStyle = 'inset';
        x = x + 8
    }
    else {
        // do some other stuff
        document.getElementById('Harem').style.borderStyle = 'outset';
        x = x - 8
    }
    
}
var race = document.getElementById('selRace');
var subrace = document.getElementById('selSubRace');
var raceValue = race.value;
var subraceValue = subrace.value;

var str = document.getElementById('Strength');
var con = document.getElementById('Constitution');
var dex = document.getElementById('Dexterity');
var int = document.getElementById('Intelligence');
var wis = document.getElementById('Wisdom');
var cha = document.getElementById('Charisma');

var strRaceMod = 0;
var conRaceMod = 0;
var dexRaceMod = 0;
var wisRaceMod = 0;
var intRaceMod = 0;
var chaRaceMod = 0;

var strMod = 0;
var conMod = 0;
var dexMod = 0;
var wisMod = 0;
var intMod = 0;
var chaMod = 0;

var stats = document.getElementById('Stats');

//Array of objects for subraces based on the races
window.onload = function chooseSubRace(){
    var Dwarf = {
        hill: 'Hill Dwarf',
        mountain: 'Mountain Dwarf'
    };
    var Elf = {
        high: 'High Elf',
        wood: 'Wood Elf',
        drow: 'Drow'
    };
    var Halfling = {
        lightfoot: 'Lightfoot',
        stout: 'Stout'
    };
    var Human = {
        normal: 'Human',
        variant: 'Variant'
    };
    var Dragonborn = {
        black: 'Black',
        blue: 'Blue',
        brass: 'Brass',
        bronze: 'Bronze',
        copper: 'Copper',
        gold: 'Gold',
        green: 'Green',
        red: 'Red',
        silver: 'Silver',
        white: 'White'
    };
    var Gnome = {
        forest: 'Forest Gnome',
        rock: 'Rock Gnome'
    };
    var HalfElf = {
        halfelf: 'Half-Elf'
    };
    var HalfOrc = {
        halforc: 'Half-Orc'
    };
    var Tiefling = {
        tiefling: 'Tiefling'
    };
    //Listen to fill in subraces based on which race is chosen
    race.addEventListener('change', choosing);
    function choosing() {
        raceValue = race.value;
        if (race.value === 'choose') {
            selSubRace.innerHTML = '<option>Please Choose A Race First</option>';
            return;
        }

        var races = getRaces(raceValue);
        var options = '<option>Please Choose An Option</option>';
        for (var key in races) {
            options += '<option value="' + key + '">' + races[key] + '</option>';
            selSubRace.innerHTML = options;
        }
    };
    //race values to fill in for the race dropdown
    function getRaces(raceValue) {
        
        if (raceValue === 'Dwarf') {
            return Dwarf;
        } else if (raceValue === 'Elf') {
            return Elf;
        } else if (raceValue === 'Halfling') {
            return Halfling;
        } else if (raceValue === 'Human') {
            return Human;
        } else if (raceValue === 'Dragonborn') {
            return Dragonborn;
        } else if (raceValue === 'Gnome') {
            return Gnome;
        } else if (raceValue === 'HalfElf') {
            return HalfElf;
        } else if (raceValue === 'HalfOrc') {
            return HalfOrc;
        } else if (raceValue === 'Tiefling') {
            return Tiefling;
        }
    }
};

subrace.addEventListener('change',getRaceMods);
function getRaceMods(raceValue){
    //reset to 0 for when subrace is changed
    strRaceMod = 0;
    conRaceMod = 0;
    dexRaceMod = 0;
    wisRaceMod = 0;
    intRaceMod = 0;
    chaRaceMod = 0;
    subraceValue = document.getElementById('selSubRace').value;
    raceValue = document.getElementById('selRace').value;
    //change mods based on the chosen race
    if (raceValue === 'Dwarf'){
        conRaceMod = 2;
        if (subraceValue === 'hill'){
            wisRaceMod = 1;
        } else if (subraceValue === 'mountain') {
            strRaceMod = 2;
        }
    } else if (raceValue === 'Elf') {
        dexRaceMod = 2;
        if (subraceValue === 'high') {
            intRaceMod = 1;
        } else if (subraceValue === 'wood') {
            wisRaceMod = 1;
        } else if (subraceValue === 'drow') {
            chaRaceMod = 1;
        }
    } else if (raceValue === 'Halfling') {
        dexRaceMod = 2;
        if (subraceValue === 'lightfoot') {
            chaRaceMod = 1;
        } else if (subraceValue === 'stout') {
            conRaceMod = 1;
        }
    } else if (raceValue === 'Human') {
        if (subraceValue === 'normal'){
            strRaceMod = 1;
            conRaceMod = 1;
            dexRaceMod = 1;
            intRaceMod = 1;
            wisRaceMod = 1;
            chaRaceMod = 1;
        }
    } else if (raceValue === 'Dragonborn') {
        strRaceMod = 2;
        chaRaceMod = 1;
    } else if (raceValue === 'Gnome') {
        intRaceMod = 2;
        if (subraceValue === 'forest') {
            dexRaceMod = 1;
        } else if (subraceValue === 'rock') {
            conRaceMod = 1;
        }
    } else if (raceValue === 'HalfElf') {
        chaRaceMod = 2;
    } else if (raceValue === 'HalfOrc') {
        strRaceMod = 2;
        conRaceMod = 1;
    } else if (raceValue === 'Tiefling') {
        intRaceMod = 1;
        chaRaceMod = 2;
    }

    document.getElementById("strBonus").innerHTML = strRaceMod;
    document.getElementById("conBonus").innerHTML = conRaceMod;
    document.getElementById("dexBonus").innerHTML = dexRaceMod;
    document.getElementById("intBonus").innerHTML = intRaceMod; 
    document.getElementById("wisBonus").innerHTML = wisRaceMod;
    document.getElementById("chaBonus").innerHTML = chaRaceMod;
};

addEventListener("change",totalStats);
function totalStats(){
    var strInput = parseInt(str.value);
    var conInput = parseInt(con.value);
    var dexInput = parseInt(dex.value);
    var wisInput = parseInt(wis.value);
    var intInput = parseInt(int.value);
    var chaInput = parseInt(cha.value);

    let strTotal = strInput + strRaceMod;
    document.getElementById("strTotal").innerHTML = strTotal;

    let conTotal = conInput + conRaceMod;
    document.getElementById("conTotal").innerHTML = conTotal;

    let dexTotal = dexInput + dexRaceMod;
    document.getElementById("dexTotal").innerHTML = dexTotal;

    let wisTotal = wisInput + wisRaceMod;
    document.getElementById("wisTotal").innerHTML = wisTotal;

    let intTotal = intInput + intRaceMod;
    document.getElementById("intTotal").innerHTML = intTotal;

    let chaTotal = chaInput + chaRaceMod;
    document.getElementById("chaTotal").innerHTML = chaTotal;

    console.log("Inside total", strTotal);
    getMods();
};

function getMods() {    
    console.log("Get Stats Called", strMod);
    if (strTotal <= 1){
        strMod = -5;
        document.getElementById("strMod").innerHTML = strMod;
        return strMod;
    } else if (strTotal == 2 || strTotal == 3){
        strMod = -4;
        document.getElementById("strMod").innerHTML = strMod;
        return strMod;
    } else if (strTotal == 4 || strTotal == 5){
        strMod = -3;
        document.getElementById("strMod").innerHTML = strMod;
        return strMod;
    } else if (strTotal == 6 || strTotal == 7){
        strMod = -2;
        document.getElementById("strMod").innerHTML = strMod;
        return strMod;
    } else if (strTotal == 8 || strTotal == 9){
        strMod = -1;
        document.getElementById("strMod").innerHTML = strMod;
        return strMod;
    } else if (strTotal == 10 || strTotal == 11){
        strMod = 0;
        document.getElementById("strMod").innerHTML = strMod;
        console.log("After strTotal ", strMod);
        return strMod;
    } else if (strTotal == 12 || strTotal == 13){
        strMod = 1;
        document.getElementById("strMod").innerHTML = strMod;
        console.log("After strTotal ", strMod);
        return strMod;
    } else if (strTotal == 14 || strTotal == 15){
        strMod = 2;
        document.getElementById("strMod").innerHTML = strMod;
        return strMod;
    } else if (strTotal == 16 || strTotal == 17){
        strMod = 3;
        document.getElementById("strMod").innerHTML = strMod;
        return strMod;
    } else if (strTotal == 18 || strTotal == 19){
        strMod = 4;
        document.getElementById("strMod").innerHTML = strMod;
        return strMod;
    } else if (strTotal >= 20){
        strMod = 5;
        document.getElementById("strMod").innerHTML = strMod;
        return strMod;
    }


    // if (conValue <= 1){
    //     conMod = -5;
    // } else if (conValue == 2 || conValue == 3){
    //     conMod = -4;
    // } else if (conValue == 4 || conValue == 5){
    //     conMod = -3;
    // } else if (conValue == 6 || conValue == 7){
    //     conMod = -2;
    // } else if (conValue == 8 || conValue == 9){
    //     conMod = -1;
    // } else if (conValue == 10 || conValue == 11){
    //     conMod = 0;
    // } else if (conValue == 12 || conValue == 13){
    //     conMod = 1;
    // } else if (conValue == 14 || conValue == 15){
    //     conMod = 2;
    // } else if (conValue == 16 || conValue == 17){
    //     conMod = 3;
    // } else if (conValue == 18 || conValue == 19){
    //     conMod = 4;
    // } else if (conValue >= 20){
    //     conMod = 5;
    // }    
    // if (dexValue <= 1){
    //     dexMod = -5;
    // } else if (dexValue == 2 || dexValue == 3){
    //     dexMod = -4;
    // } else if (dexValue == 4 || dexValue == 5){
    //     dexMod = -3;
    // } else if (dexValue == 6 || dexValue == 7){
    //     dexMod = -2;
    // } else if (dexValue == 8 || dexValue == 9){
    //     dexMod = -1;
    // } else if (dexValue == 10 || dexValue == 11){
    //     dexMod = 0;
    // } else if (dexValue == 12 || dexValue == 13){
    //     dexMod = 1;
    // } else if (dexValue == 14 || dexValue == 15){
    //     dexMod = 2;
    // } else if (dexValue == 16 || dexValue == 17){
    //     dexMod = 3;
    // } else if (dexValue == 18 || dexValue == 19){
    //     dexMod = 4;
    // } else if (dexValue >= 20){
    //     dexMod = 5;
    // }

    // if (intValue <= 1){
    //     intMod = -5;
    // } else if (intValue == 2 || intValue == 3){
    //     intMod = -4;
    // } else if (intValue == 4 || intValue == 5){
    //     intMod = -3;
    // } else if (intValue == 6 || intValue == 7){
    //     intMod = -2;
    // } else if (intValue == 8 || intValue == 9){
    //     intMod = -1;
    // } else if (intValue == 10 || intValue == 11){
    //     intMod = 0;
    // } else if (intValue == 12 || intValue == 13){
    //     intMod = 1;
    // } else if (intValue == 14 || intValue == 15){
    //     intMod = 2;
    // } else if (intValue == 16 || intValue == 17){
    //     intMod = 3;
    // } else if (intValue == 18 || intValue == 19){
    //     intMod = 4;
    // } else if (intValue >= 20){
    //     intMod = 5;
    // }

    // if (wisValue <= 1){
    //     conMod = -5;
    // } else if (wisValue == 2 || wisValue == 3){
    //     wisMod = -4;
    // } else if (wisValue == 4 || wisValue == 5){
    //     wisMod = -3;
    // } else if (wisValue == 6 || wisValue == 7){
    //     wisMod = -2;
    // } else if (wisValue == 8 || wisValue == 9){
    //     wisMod = -1;
    // } else if (wisValue == 10 || wisValue == 11){
    //     wisMod = 0;
    // } else if (wisValue == 12 || wisValue == 13){
    //     wisMod = 1;
    // } else if (wisValue == 14 || wisValue == 15){
    //     wisMod = 2;
    // } else if (wisValue == 16 || wisValue == 17){
    //     wisMod = 3;
    // } else if (wisValue == 18 || wisValue == 19){
    //     wisMod = 4;
    // } else if (wisValue >= 20){
    //     wisMod = 5;
    // }    

    // if (chaValue <= 1){
    //     chaMod = -5;
    // } else if (chaValue == 2 || chaValue == 3){
    //     chaMod = -4;
    // } else if (chaValue == 4 || chaValue == 5){
    //     chaMod = -3;
    // } else if (chaValue == 6 || chaValue == 7){
    //     chaMod = -2;
    // } else if (chaValue == 8 || chaValue == 9){
    //     chaMod = -1;
    // } else if (chaValue == 10 || chaValue == 11){
    //     chaMod = 0;
    // } else if (chaValue == 12 || chaValue == 13){
    //     chaMod = 1;
    // } else if (chaValue == 14 || chaValue == 15){
    //     chaMod = 2;
    // } else if (chaValue == 16 || chaValue == 17){
    //     chaMod = 3;
    // } else if (chaValue == 18 || chaValue == 19){
    //     chaMod = 4;
    // } else if (chaValue >= 20){
    //     chaMod = 5;
    // }    

    // document.getElementById("strMod").innerHTML = strMod;
    // document.getElementById("conMod").innerHTML = conMod;
    // document.getElementById("dexMod").innerHTML = dexMod;
    // document.getElementById("intMod").innerHTML = intMod; 
    // document.getElementById("wisMod").innerHTML = wisMod;
    // document.getElementById("chaMod").innerHTML = chaMod;
};
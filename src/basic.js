var race = document.getElementById('selRace');
var subrace = document.getElementById('selSubRace');
var raceValue = race.value;
var subraceValue = subrace.value;

var myclass = document.getElementById('selClass');
var mysubclass = document.getElementById('selSubClass');
var classValue = myclass.value;
var subclassValue = mysubclass.value;

var str = document.getElementById('Strength');
var con = document.getElementById('Constitution');
var dex = document.getElementById('Dexterity');
var int = document.getElementById('Intelligence');
var wis = document.getElementById('Wisdom');
var cha = document.getElementById('Charisma');
var strMod = document.getElementById('strMod').value;
var conMod = 0;
var dexMod = 0;
var wisMod = 0;
var intMod = 0;
var chaMod = 0;

var stats = document.getElementById('Stats');

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
    race.addEventListener('change', choosing);
    function choosing() {
        raceValue = race.value;
        if (race.value === 'choose') {
            selSubRace.innerHTML = '<option>Please choose a Race First</option>';
            return;
        }

        var races = getRaces(raceValue);
        var options = '<option>Please Choose An Option</option>';
        for (var key in races) {
            options += '<option value="' + key + '">' + races[key] + '</option>';
            selSubRace.innerHTML = options;
        }
        console.log(document.getElementById('selSubRace').value);
    };
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


addEventListener("change", chooseSubClass);
function chooseSubClass(){
    var Barbarian = {
        berserker: 'Path of the Berserker',
        totem: 'Path of the Totem Warrior'
    };
    var Bard = {
        lore: 'College of Lore',
        valor: 'College of Valor'
    };
    var Cleric = {
        knowledge: 'Knowledge Domain',
        life: 'Life Domain',
        light: 'Light Domain',
        nature: 'Nature Domain',
        tempest: 'Tempest Domain',
        trickery: 'Trickery Domain',
        war: 'War Domain'
    };
    var Druid = {
        land: 'Circle of Land',
        moon: 'Circle of Moon'
    };
    var Fighter = {
        champion: 'Champion',
        battlemaster: 'Battle Master',
        eldritch: 'Eldritch Knight'
    };
    var Monk = {
        open: 'Way of the Open Hand',
        shadow: 'Way of the Shadow',
        elements: 'Way of the Four Elements'
    };
    var Paladin = {
        devotion: 'Oath of Devotion',
        ancients: 'Oath of the Ancients',
        vengeance: 'Oath of Vengeance'
    };
    var Ranger = {
        hunter: 'Hunter',
        beast: 'Beast Master'
    };
    var Rogue = {
        thief: 'Thief',
        assassin: 'Assassin',
        arcane: 'Arcane Trickster'
    };
    var Sorcerer = {
        draconic: 'Draconic Bloodline',
        wild: 'Wild Magic'
    };
    var Warlock = {
        archfey: 'The Archfey',
        fiend: 'The Fiend',
        great: 'The Great Old One'
    };
    var Wizard = {
        abjuration: 'School of Abjuration',
        conjuration: 'School of Conjuration',
        divination: 'School of Divination',
        enchantment: 'School of Enchantment',
        evocation: 'School of Evocation',
        illusion: 'School of Illusion',
        necromancy: 'School of Necromancy',
        transmutation: 'School of Transmutation'
    };


    myclass.addEventListener('change', choosingClasses);

    function choosingClasses() {
        classValue = myclass.value;
        if (myclass.value === 'choose') {
            selSubClass.innerHTML = '<option>Please choose a Class First</option>';
            return;
        }

        var classes = getClasses(classValue);
        var options = '<option>Please Choose An Option</option>';
        for (var key in classes) {
            options += '<option value="' + key + '">' + classes[key] + '</option>';
            selSubClass.innerHTML = options;
        }
    };

    function getClasses(classValue) {
        
        if (classValue === 'Barbarian') {
            return Barbarian;
        } else if (classValue === 'Bard') {
            return Bard;
        } else if (classValue === 'Cleric') {
            return Cleric;
        } else if (classValue === 'Druid') {
            return Druid;
        } else if (classValue === 'Fighter') {
            return Fighter;
        } else if (classValue === 'Monk') {
            return Monk;
        } else if (classValue === 'Paladin') {
            return Paladin;
        } else if (classValue === 'Ranger') {
            return Ranger;
        } else if (classValue === 'Rogue') {
            return Rogue;
        } else if (classValue === 'Sorcerer'){
            return Sorcerer;
        } else if (classValue === 'Warlock') {
            return Warlock;
        } else if (classValue === 'Wizard'){
            return Wizard;
        }
    }
};

stats.addEventListener("input",getMod);
function getMod() {
    strValue = str.value;
    conValue = con.value;
    dexValue = dex.value;
    wisValue = wis.value;
    intValue = int.value;
    chaValue = cha.value;

    if (strValue <= 1){
        strMod = -5;
    } else if (strValue == 2 || strValue == 3){
        strMod = -4;
    } else if (strValue == 4 || strValue == 5){
        strMod = -3;
    } else if (strValue == 6 || strValue == 7){
        strMod = -2;
    } else if (strValue == 8 || strValue == 9){
        strMod = -1;
    } else if (strValue == 10 || strValue == 11){
        strMod = 0;
    } else if (strValue == 12 || strValue == 13){
        strMod = 1;
    } else if (strValue == 14 || strValue == 15){
        strMod = 2;
    } else if (strValue == 16 || strValue == 17){
        strMod = 3;
    } else if (strValue == 18 || strValue == 19){
        strMod = 4;
    } else if (strValue >= 20){
        strMod = 5;
    }

    if (conValue <= 1){
        conMod = -5;
    } else if (conValue == 2 || conValue == 3){
        conMod = -4;
    } else if (conValue == 4 || conValue == 5){
        conMod = -3;
    } else if (conValue == 6 || conValue == 7){
        conMod = -2;
    } else if (conValue == 8 || conValue == 9){
        conMod = -1;
    } else if (conValue == 10 || conValue == 11){
        conMod = 0;
    } else if (conValue == 12 || conValue == 13){
        conMod = 1;
    } else if (conValue == 14 || conValue == 15){
        conMod = 2;
    } else if (conValue == 16 || conValue == 17){
        conMod = 3;
    } else if (conValue == 18 || conValue == 19){
        conMod = 4;
    } else if (conValue >= 20){
        conMod = 5;
    }    
    if (dexValue <= 1){
        dexMod = -5;
    } else if (dexValue == 2 || dexValue == 3){
        dexMod = -4;
    } else if (dexValue == 4 || dexValue == 5){
        dexMod = -3;
    } else if (dexValue == 6 || dexValue == 7){
        dexMod = -2;
    } else if (dexValue == 8 || dexValue == 9){
        dexMod = -1;
    } else if (dexValue == 10 || dexValue == 11){
        dexMod = 0;
    } else if (dexValue == 12 || dexValue == 13){
        dexMod = 1;
    } else if (dexValue == 14 || dexValue == 15){
        dexMod = 2;
    } else if (dexValue == 16 || dexValue == 17){
        dexMod = 3;
    } else if (dexValue == 18 || dexValue == 19){
        dexMod = 4;
    } else if (dexValue >= 20){
        dexMod = 5;
    }

    if (intValue <= 1){
        intMod = -5;
    } else if (intValue == 2 || intValue == 3){
        intMod = -4;
    } else if (intValue == 4 || intValue == 5){
        intMod = -3;
    } else if (intValue == 6 || intValue == 7){
        intMod = -2;
    } else if (intValue == 8 || intValue == 9){
        intMod = -1;
    } else if (intValue == 10 || intValue == 11){
        intMod = 0;
    } else if (intValue == 12 || intValue == 13){
        intMod = 1;
    } else if (intValue == 14 || intValue == 15){
        intMod = 2;
    } else if (intValue == 16 || intValue == 17){
        intMod = 3;
    } else if (intValue == 18 || intValue == 19){
        intMod = 4;
    } else if (intValue >= 20){
        intMod = 5;
    }

    if (wisValue <= 1){
        conMod = -5;
    } else if (wisValue == 2 || wisValue == 3){
        wisMod = -4;
    } else if (wisValue == 4 || wisValue == 5){
        wisMod = -3;
    } else if (wisValue == 6 || wisValue == 7){
        wisMod = -2;
    } else if (wisValue == 8 || wisValue == 9){
        wisMod = -1;
    } else if (wisValue == 10 || wisValue == 11){
        wisMod = 0;
    } else if (wisValue == 12 || wisValue == 13){
        wisMod = 1;
    } else if (wisValue == 14 || wisValue == 15){
        wisMod = 2;
    } else if (wisValue == 16 || wisValue == 17){
        wisMod = 3;
    } else if (wisValue == 18 || wisValue == 19){
        wisMod = 4;
    } else if (wisValue >= 20){
        wisMod = 5;
    }    

    if (chaValue <= 1){
        chaMod = -5;
    } else if (chaValue == 2 || chaValue == 3){
        chaMod = -4;
    } else if (chaValue == 4 || chaValue == 5){
        chaMod = -3;
    } else if (chaValue == 6 || chaValue == 7){
        chaMod = -2;
    } else if (chaValue == 8 || chaValue == 9){
        chaMod = -1;
    } else if (chaValue == 10 || chaValue == 11){
        chaMod = 0;
    } else if (chaValue == 12 || chaValue == 13){
        chaMod = 1;
    } else if (chaValue == 14 || chaValue == 15){
        chaMod = 2;
    } else if (chaValue == 16 || chaValue == 17){
        chaMod = 3;
    } else if (chaValue == 18 || chaValue == 19){
        chaMod = 4;
    } else if (chaValue >= 20){
        chaMod = 5;
    }    

    document.getElementById("strMod").innerHTML = strMod;
    document.getElementById("conMod").innerHTML = conMod;
    document.getElementById("dexMod").innerHTML = dexMod;
    document.getElementById("intMod").innerHTML = intMod; 
    document.getElementById("wisMod").innerHTML = wisMod;
    document.getElementById("chaMod").innerHTML = chaMod;   
};





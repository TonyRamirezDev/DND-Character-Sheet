var race = document.getElementById('selRace');
var subrace = document.getElementById('selSubRace');
var raceValue = race.value;
var subraceValue = subrace.value;

var myclass = document.getElementById('selClass');
var mysubclass = document.getElementById('selSubClass');
var classValue = myclass.value;
var subclassValue = mysubclass.value;

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





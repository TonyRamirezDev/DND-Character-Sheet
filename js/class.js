var myclass = document.getElementById('selClass');
var mysubclass = document.getElementById('selSubClass');
var classValue = myclass.value;
var subclassValue = mysubclass.value;

//window.onload = function chooseSubClass(){

addEventListener("change", chooseSubClass);
//Array of objects for specialties based on Class
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

    //fill in specialty dropdown based on chosen Class
    function choosingClasses() {
        classValue = myclass.value;
        if (myclass.value === 'choose') {
            selSubClass.innerHTML = '<option>Please Choose A Class First</option>';
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
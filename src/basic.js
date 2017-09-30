var race = document.getElementById('selRace');
var subrace = document.getElementById('selSubRace');
var raceValue = race.value;
var subraceValue = subrace.value;

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


    addEventListener('change', choosing);

    function choosing() {
        raceValue = race.value;
        if (race.value === 'choose') {
            choose.innerHTML = '<option>Please choose a Race First</option>';
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






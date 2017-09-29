var race = document.getElementById('selRace');
var subrace = document.getElementById('selSubRace');
var raceValue = race.value;
var subraceValue = subrace.value;

window.onload = function chooseSubRace(){
    console.log("Hit Function", raceValue);
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
        console.log("Hit Choosing");
        raceValue = race.value;
        if (race.value === 'choose') {
            choose.innerHTML = '<option>Please choose a Race First</option>';
            console.log("Hit choose IF Statement")
            return;
        }

        var races = getRaces(raceValue);
        console.log("Hit Races: ", races);
        var options = '<option>Please Choose a Sub-Race</option>';
        console.log("Hit options");
        for (var key in races) {
            options += '<option value="' + key + '">' + races[key] + '</option>';
            sub.innerHTML = options;
            console.log(options);
        }
    };

    function getRaces(raceValue) {
        console.log("Hit getRaces", raceValue, Dwarf);
        if (raceValue === 'Dwarf') {
            return Dwarf;
        }
        else if (raceValue === 'Elf') {
            return Elf;
        }
        else if (raceValue === 'Halfling') {
            return Halfling;
        }
        else if (selRace === 'Human') {
            return Human;
        }
        else if (selRace === 'Dragonborn') {
            return Dragonborn;
        }
        else if (selRace === 'Gnome') {
            return Gnome;
        }
        else if (selRace === 'HalfElf') {
            return HalfElf;
        }
        else if (selRace === 'HalfOrc') {
            return HalfOrc;
        }
        else if (selRace === 'Tiefling') {
            return Tiefling;
        }
    }
};






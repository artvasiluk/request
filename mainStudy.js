var request = require('request');

var func =          (a, b) => a + b;
var func2 =          function(x) { return x * 2; }

console.log(func(4, 5));

function findInWiki(value) {
    var options = {
          method: 'GET',
          uri: 'https://ru.wikipedia.org/wiki/' + encodeURIComponent(value)
        };
    request(options, (err, response, body) => {
      if (err) throw err;
	  
	  var born = 'Родившиеся ';
	  var dayBornStart = body.indexOf(born) + born.length;
	  var dayBornFin = body.indexOf('"', dayBornStart + 1);
	  var yearBornStart = body.indexOf(born, dayBornFin + 1) + born.length - 1;
	  var yearBornFin = body.indexOf('"', yearBornStart + 1);
	  var cityBornStart = body.indexOf(born, yearBornFin + 1) + born.length - 1;
	  var cityBornFin = body.indexOf('"', cityBornStart + 1);
	  var die = 'Умершие ';
	  var dayDieStart = body.indexOf(die) + die.length;
	  var dayDieFin = body.indexOf('"', dayDieStart + 1);
	  var yearDieStart = body.indexOf(die, dayDieFin + 1) + die.length - 1;
	  var yearDieFin = body.indexOf('"', yearDieStart + 1);
	  var cityDieStart = body.indexOf(die, yearDieFin + 1) + die.length - 1;
	  var cityDieFin = body.indexOf('"', cityDieStart + 1);
	  
	  var dayBorn = body.substring(dayBornStart, dayBornFin);
	  var yearBorn = body.substring(yearBornStart, yearBornFin);
	  var cityBorn = body. substring(cityBornStart, cityBornFin);
	  var dayDie = body.substring(dayDieStart, dayDieFin);
	  var yearDie = body.substring(yearDieStart, yearDieFin);
	  var cityDie = body.substring(cityDieStart, cityDieFin);
	  
	  var result = 'Родился ' + dayBorn + yearBorn + cityBorn + '. Умер ' + dayDie + yearDie + cityDie + '.';
	  
      console.log(result);
	  // найти когда и где родился и умер и вывести на экран
	  
    });
}

findInWiki('Щуко,_Владимир_Алексеевич');


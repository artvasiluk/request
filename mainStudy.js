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
	  	  
	  var dayBornStart = body.indexOf('Родившиеся ') + 11;
	  var dayBornFin = body.indexOf('"', dayBornStart + 1);
	  var yearBornStart = body.indexOf('Родившиеся ', dayBornFin + 1) + 10;
	  var yearBornFin = body.indexOf('"', yearBornStart + 1);
	  var cityBornStart = body.indexOf('Родившиеся ', yearBornFin + 1) + 10;
	  var cityBornFin = body.indexOf('"', cityBornStart + 1);
	  
	  var dayDieStart = body.indexOf('Умершие ') + 8;
	  var dayDieFin = body.indexOf('"', dayDieStart + 1);
	  var yearDieStart = body.indexOf('Умершие ', dayDieFin + 1) + 7;
	  var yearDieFin = body.indexOf('"', yearDieStart + 1);
	  var cityDieStart = body.indexOf('Умершие ', yearDieFin + 1) + 7;
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


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
	  var dayBornFin = body.indexOf('Родившиеся ', 2) - 2;
	  var yearBornStart = body.indexOf('Родившиеся ', 3) + 10;
	  var yearBornFin = body.indexOf('Родившиеся ', 4) -  2;
	  var cityBornStart = body.indexOf('Родившиеся ', 5) + 10;
	  var cityBornFin = body.indexOf('Родившиеся ', 6) - 2;
	  var dayDieStart = body.indexOf('Умершие ') + 8;
	  var dayDieFin = body.indexOf('Умершие ', 2) - 2;
	  var yearDieStart = body.indexOf('Умершие ', 3) + 7;
	  var yearDieFin = body.indexOf('Умершие ', 4) - 2;
	  var cityDieStart = body.indexOf('Умершие ', 5) + 7;
	  var cityDieFin = body.indexOf('Умершие ', 6) - 2;
	  
	  var dayBorn = body.substring(dayBornStart, dayBornFin);
	  var yearBorn = body.substring(yearBornStart, yearBornFin);
	  var cityBorn = body. substring(cityBornStart, cityBornFin);
	  var dayDie = body.substring(dayBornStart, dayDieFin);
	  var yearDie = body.substring(yearDieStart, yearDieFin);
	  var cityDie = body.substring(cityDieStart, cityDieFin);
	  
	  var result = 'Родился ' + dayBorn + yearBorn + cityBorn + '\n' + 'Умер' + dayDie + yearDie + cityDie;
	  
      console.log(result);
	  // найти когда и где родился и умер и вывести на экран
	  
    });
}

findInWiki('Щуко,_Владимир_Алексеевич');


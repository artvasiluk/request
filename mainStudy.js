var request = require('request');

function findInWikiByLang(value, langPrefix, handler) {
	    var options = {
          method: 'GET',
          uri: 'https://' + langPrefix + '.wikipedia.org/wiki/' + encodeURIComponent(value)
        };
    request(options, (err, response, body) => {
      if (err) throw err;
	  console.log(handler(body));
	  
    });
}

function findDirectors () {
	  var options = {
          method: 'GET',
          uri: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%A0%D0%B5%D0%B6%D0%B8%D1%81%D1%81%D1%91%D1%80%D1%8B_%D0%BF%D0%BE_%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82%D1%83'// + encodeURIComponent(value)
        };
    request(options, (err, response, body) => {
      if (err) throw err;
	  console.log(nameOne(body));

    });
}

function nameOne(body) {
	var nameOf = '<li><a href="/wiki/';
	var firstIndex = body.indexOf(nameOf);
	if (firstIndex !== -1) {
		var nameStart = firstIndex + nameOf.length;
		var nameFin = body.indexOf('"', nameStart + 1);
		var name = body.substring(nameStart, nameFin);
		
		return name;
	}
}

findDirectors();

function Ru(body) {
	  var born = 'Родившиеся ';
	  var dayBornStart = body.indexOf(born) + born.length;
	  var dayBornFin = body.indexOf('"', dayBornStart + 1);
	  var yearBornStart = body.indexOf(born, dayBornFin + 1) + born.length - 1;
	  var yearBornFin = body.indexOf('"', yearBornStart + 1);
	  var cityBornStart = body.indexOf(born, yearBornFin + 1) + born.length - 1;
	  var cityBornFin = body.indexOf('"', cityBornStart + 1);
	  	  
	  var dayBorn = body.substring(dayBornStart, dayBornFin);
	  var yearBorn = body.substring(yearBornStart, yearBornFin);
	  var cityBorn = body. substring(cityBornStart, cityBornFin);
	  var die = 'Умершие ';
	  
	  if (body.indexOf(die) === -1) {
		return result1 = 'Родился ' + dayBorn + yearBorn + cityBorn + '. Жив по сей день.';
	  } else {
		  var dayDieStart = body.indexOf(die) + die.length;
		  var dayDieFin = body.indexOf('"', dayDieStart + 1);
		  var yearDieStart = body.indexOf(die, dayDieFin + 1) + die.length - 1;
		  var yearDieFin = body.indexOf('"', yearDieStart + 1);
		  var cityDieStart = body.indexOf(die, yearDieFin + 1) + die.length - 1;
		  var cityDieFin = body.indexOf('"', cityDieStart + 1);
		  
		  var dayDie = body.substring(dayDieStart, dayDieFin);
		  var yearDie = body.substring(yearDieStart, yearDieFin);
		  var cityDie = body.substring(cityDieStart, cityDieFin);
		  return result2 = 'Родился ' + dayBorn + yearBorn + cityBorn + '. Умер ' + dayDie + yearDie + cityDie + '.';
	  }	  
}

function En(body) {
	  var born = '</span>)</span>';
	  var dayBornStart = body.indexOf(born) + born.length;
	  var dayBornFin = body.indexOf('<', dayBornStart + 1);
	  
	  var city = 'title="'
	  var cityBornStart = body.indexOf(city, dayBornFin + 1) + city.length; 		
	  var cityBornFin = body.indexOf('"', cityBornStart + 1);

	  var dayBorn = body.substring(dayBornStart, dayBornFin);
	  dayBorn.trim();
	  var cityBorn = body. substring(cityBornStart, cityBornFin);
	  cityBorn.trim();
	  var die = '"row">Died</th>';	  
	  if (body.indexOf(die) === -1) {
		return result1 = 'Was born ' + dayBorn + cityBorn + '. Alive.';
	  } else {
		  var dayDieStart = body.indexOf(die) + die.length + 5;
		  var dayDieFin = body.indexOf('<', dayDieStart + 1);
		  
		  var cityDieStart = body.indexOf(city, dayDieFin + 1) + die.length - 1;
		  var cityDieFin = body.indexOf('"', cityDieStart + 1);
		  
		  var dayDie = body.substring(dayDieStart, dayDieFin);
		  dayDie.trim();
		  var cityDie = body.substring(cityDieStart, cityDieFin);
		  cityDie.trim();
		  return result2 = 'Was born ' + dayBorn + ', '+ cityBorn + '. Died ' + dayDie + ', '+ cityDie + '.';
	  }	  
}
function findInWiki(lang, name) {
	if (lang === 'En'){
		findInWikiByLang(name, 'en', En);
	} else if (lang === 'Ru'){
		findInWikiByLang(name, 'ru', Ru);
	} else {"I don't know this language."}
}

//findInWikiEn('Jimi_Hendrix');
//findInWikiEn('Albert_Einstein');
//findInWikiEn('Bob_Marley');
//findInWikiEn('Takeshi_Kitano');
//console.log(En(source));

//findInWiki('Ru', 'Щуко,_Владимир_Алексеевич');
//('En', 'Peter_the_Great');
//findInWiki('Колли,_Николай_Джемсович');
//findInWiki('Кернес,_Геннадий_Адольфович');

var request = require('request');

function findInWikiByLang(value, langPrefix, handler) {
	var options = {		
        method: 'GET',
        uri: 'https://' + langPrefix + '.wikipedia.org/wiki/' + encodeURIComponent(value)
    };
    request(options, (err, response, body) => {
		if (err) throw err;
		console.log(prettyPrint(handler(body)));
	});
}

function findDirectors () {
	var options = {
        method: 'GET',
        uri: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%A0%D0%B5%D0%B6%D0%B8%D1%81%D1%81%D1%91%D1%80%D1%8B_%D0%BF%D0%BE_%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82%D1%83'// + encodeURIComponent(value)
        };
    request(options, (err, response, body) => {
		if (err) throw err;
		nameList(body);
		
    });
}

function nameList(body) {
	var nameOf = '<li><a href="/wiki/';
	var index = body.indexOf(nameOf);
	var list = [];
	
	while (index !== -1) {
		var nameStart = index + nameOf.length;
		var nameFin = body.indexOf('"', nameStart + 1);
		var name = body.substring(nameStart, nameFin);
		var category1 = '%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D0%B8%D0%B9_%D0%BF%D0%BE_%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82%D1%83';
		var category2 = '%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%A0%D0%B5%D0%B6%D0%B8%D1%81%D1%81%D1%91%D1%80%D1%8B';
		
		if (name !== category1 && name !== category2) {
			list.push(decodeURIComponent(name));
		}
		index = body.indexOf(nameOf, nameFin + 1);
	}
	var listTotal = '';
	for (i = 0; i < list.length; i++) {
		listTotal += list[i] + ' ' + findInWiki('Ru', list[i]) + '\n';
	}
	return listTotal;
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
		//return result1 = 'Родился ' + dayBorn + yearBorn + cityBorn + '. Жив по сей день.';
		return {
			language: 'Ru',
			birthDay: dayBorn,
			birthYear: yearBorn,
			birthCity: cityBorn,
			dieDay: null,
			dieYear: null,
			dieCity: null
		};
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
		//return result2 = 'Родился ' + dayBorn + yearBorn + cityBorn + '. Умер ' + dayDie + yearDie + cityDie + '.';
		return {
			language: 'Ru',
			birthDay: dayBorn,
			birthYear: yearBorn,
			birthCity: cityBorn,
			dieDay: dayDie,
			dieYear: yearDie,
			dieCity: cityDie
		};
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
	//return result1 = 'Was born ' + dayBorn + cityBorn + '. Alive.';
		return {
			language: 'En',
			birthDay: dayBorn,
			birthYear: null,
			birthCity: cityBorn,
			dieDay: null,
			dieYear: null,
			dieCity: null
		};
	} else {
		var dayDieStart = body.indexOf(die) + die.length + 5;
		var dayDieFin = body.indexOf('<', dayDieStart + 1);
		  
		var cityDieStart = body.indexOf(city, dayDieFin + 1) + die.length - 1;
		var cityDieFin = body.indexOf('"', cityDieStart + 1);
		  
		var dayDie = body.substring(dayDieStart, dayDieFin);
		dayDie.trim();
		var cityDie = body.substring(cityDieStart, cityDieFin);
		cityDie.trim();
		//return result2 = 'Was born ' + dayBorn + ', '+ cityBorn + '. Died ' + dayDie + ', '+ cityDie + '.';
		return {
			language: 'En',
			birthDay: dayBorn,
			birthYear: null,
			birthCity: cityBorn,
			dieDay: dayDie,
			dieYear: null,
			dieCity: cityDie
		};
	}	  
}

function findInWiki(lang, name) {
	if (lang === 'En'){
		findInWikiByLang(name, 'en', En);
	} else if (lang === 'Ru'){
		findInWikiByLang(name, 'ru', Ru);
	} else {"I don't know this language."}
}

function prettyPrint(val) {
	var string = '';
	
	if (val.language === 'En') {
		if (val.dieDay === null) {
			string = 'Was born ' + val.birthDay + ', '+ val.birthCity + '. Alive.';
		} else {
			string = 'Was born ' + val.birthDay + ', '+ val.birthCity + '. Died ' + val.dieDay + ', '+ val.dieCity + '.';
		}
	} else if (val.language === 'Ru') {
		if (val.dieDay === null) {
			string = 'Родился ' + val.birthDay + val.birthYear + ', '+ val.birthCity + '. Жив по сей день.';
		} else {
			string = 'Родился ' + val.birthDay + val.birthYear + ', '+ val.birthCity + '. Умер ' + val.dieDay + val.dieYear + ', '+ val.dieCity + '.';
		}
	}
	return string;
}

//findInWiki('En', 'Jimi_Hendrix');
//findInWikiEn('Albert_Einstein');
//findInWikiEn('Bob_Marley');
//findInWikiEn('Takeshi_Kitano');
//console.log(En(source));

//findInWiki('Ru', 'Щуко,_Владимир_Алексеевич');
//('En', 'Peter_the_Great');
//findInWiki('Колли,_Николай_Джемсович');
//findInWiki('Кернес,_Геннадий_Адольфович');

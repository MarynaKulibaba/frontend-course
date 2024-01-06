'use strict';

const BirthPromptMessage = 'Your year of birth';
const BirthErrorMessage = "We're sorry you didn't want to enter yours birth year";
const CityPromptMessage = 'Your city of residence';
const CityErrorMessage = 'We are sorry you did not want to enter yours residenceCity';
const SportPromptMessage = 'Your favorite sport';
const SportErrorMessage = 'We are sorry you did not want to enter yours favoriteSport';

const countries = {
	kyiv: 'Ukraine',
	washington: 'United States',
	london: 'United Kingdom',
};

const sportsChampions = {
	soccer: 'Cristiano Ronaldo',
	basketball: 'LeBron James',
	tennis: 'Rafael Nadal',
};

try {
	// 1.запитати у користувача рік народження, в якому місті він живе, улюблений вид спорту.
	let birthYear = +prompt(BirthPromptMessage);
	if (birthYear <= 0) exception(BirthErrorMessage);
	let city = prompt(CityPromptMessage)?.trim() || exception(CityErrorMessage);
	let sportName =
		prompt(SportPromptMessage)?.trim() || exception(SportErrorMessage);

	// 2. показуємо вікно, де має бути відображена інформація
	let ageMessage = showAge(birthYear);
	let cityMessage = showCity(city);
	let sport = showSport(sportName);
	alert(
		`Your age: ${ageMessage} year.\n${cityMessage}.\nFavourite sport: ${sport.sportName}.\n${sport.message}.`
	);
} catch (e) {
	alert(e);
}

function exception(error) {
	throw new Error(error);
}

function showAge(year) {
	let date = new Date().getFullYear();
	return date - year;
}

function showCity(residenceCity) {
	let cityMessage = `You live in the ${residenceCity}`;
	if (countries[residenceCity.toLowerCase()]) {
		cityMessage = `You live in the capital of ${
			countries[residenceCity.toLowerCase()]
		}`;
	}
	return cityMessage;
}

function showSport(favoriteSport) {
	let sportMessage;

	if (sportsChampions[favoriteSport.toLowerCase()]) {
		sportMessage = `Cool! Do you want to be like ${sportsChampions[favoriteSport]}`;
	}
	return { sportName: favoriteSport, message: sportMessage };
}
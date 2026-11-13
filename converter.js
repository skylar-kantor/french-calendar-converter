Date.prototype.getJulian = function() {
  return Math.floor((this / 86400000) - (this.getTimezoneOffset() / 1440) + 2440587.5);
}

function getMonthName(month) {
    switch (month) {
		case 1:  return "Vendémiaire";
		case 2:  return "Brumaire";
		case 3:  return "Frimaire";
		case 4:  return "Nivôse";
		case 5:  return "Pluviôse";
		case 6:  return "Ventôse";
		case 7:  return "Germinal";
		case 8:  return "Floréal";
		case 9:  return "Prairial";
		case 10: return "Messidor";
		case 11: return "Thermidor";
		case 12: return "Fructidor";

			// Jours complémentaires
		default: return "Jours complémentaires";

	}
}

function getDécadeDay(day)
{

    switch(parseInt(day.toString().slice(-1)))
    {
        case 1: return "Primidi"
        case 2: return "Duodi"
        case 3: return "Tridi"
        case 4: return "Quartidi"
        case 5: return "Quintidi"
        case 6: return "Sextidi"
        case 7: return "Septidi"
        case 8: return "Octidi"
        case 9: return "Nonidi"
        case 0: return "Décadi"
    }
}


const today = new Date(); //set any date
const today_jdn = today.getJulian(); //get Julian counterpart

const epoch = new Date(1792, 8, 22);
const epoch_jdn = epoch.getJulian();

const leaps = [0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1];
var year_len
if(leaps[today.getFullYear() % 2020] == 0)
{
    year_len = 365;
} else {
    year_len = 366
}


const jd_diff = today_jdn - epoch_jdn;
console.log(`There has been ${jd_diff} days between ${epoch} and ${today}`)
var year = Math.floor(jd_diff/year_len) + 1; //This disregards previous leap years, but is close enough to give us the year number
console.log(`The year is ${year}`)
const num_leap_years = Math.floor(year / 4) - 1;
console.log(`There have been ${num_leap_years } leap years between 1 and ${year}`)
const day_in_year = jd_diff -  (((year - 1)*year_len) + num_leap_years) // Number of days of all previous years, including the leap days
console.log(`it is day ${day_in_year} in ${year}`)
const month = Math.floor(day_in_year / 30) + 1
const month_name = getMonthName(month)
var day_in_month;
if (month_name == "Jours complémentaires") {
    year -= 1;
    day_in_month =  day_in_year % 6 + 1
} else {
    day_in_month =  day_in_year - 30*(month-1) // Days to end of previous month
}
console.log(`It is the month of ${month_name}`)
console.log(`It is day ${day_in_month} of ${month_name}`)
const décadeDay = getDécadeDay(day_in_month);
console.log(`${today} is ${décadeDay} ${day_in_month} ${month_name} ${year}`)
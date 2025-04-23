/*Q3. Compute the air quality given an air quality index:
"Good" - 0 to 50 AQI
"Moderate" - 51 - 100 AQI
"Unhealthy for Sensitive Groups" - 101 - 150 AQI
"Unhealthy" - 151 - 200 AQI
"Very Unhealthy" - 201 - 300 AQI
"Hazardous" - 300+ AQI


Make a test for each type of air quality.
*/

function airQualityIndex(aqi) {
    if (aqi >= 0 && aqi <= 50) {
        return "Good";
    } else if (aqi >= 51 && aqi <= 100) {
        return "Moderate";
    } else if (aqi >= 100 && aqi <= 150) {
        return "Unhealthy for Sensitive Groups"
    } else if (aqi >= 151 && aqi <= 200) {
        return "Unhealthy";
    } else if (aqi >= 201 && aqi <= 300) {
        return "Very Unhealthy";
    } else {
        return "Hazardous";
    }
}

console.log(airQualityIndex(25));
console.log(airQualityIndex(75));
console.log(airQualityIndex(125));
console.log(airQualityIndex(175));
console.log(airQualityIndex(250));
console.log(airQualityIndex(350));
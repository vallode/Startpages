Weather.setApiKey('');

Weather.getCurrent("London", (current) => {

    let weather = current.conditions();
    let temp_kelvin = current.temperature();
    let temp_celsius = Math.floor(Weather.kelvinToCelsius(current.temperature()));

    document.getElementById("weather").innerText = weather;

    document.getElementById("temperature").innerText = temp_celsius.toString() + String.fromCharCode(176) + 'C';

});
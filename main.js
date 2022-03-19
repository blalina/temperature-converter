const temperatureInCelsiusInput = document.querySelector('.js-temperature-in-celsius_input');
const temperatureInFahrenheitInput = document.querySelector('.js-temperature-in-fahrenheit_input');

const temperatureСonverterInCelsius= (number) => {
    const formulaForConvertingCelsius = (number - 32) * (5 / 9);
    return formulaForConvertingCelsius;
}

const temperatureСonverterInFahrenheit = (number) => {
    const formulaForConvertingFahrenheit = number * (9 / 5) + 32;
    return formulaForConvertingFahrenheit;
}

temperatureInCelsiusInput.addEventListener('input', () => {
    const celsiusInputValue = temperatureInCelsiusInput.value;
    const conversionFromCelsiusToFahrenheit = temperatureСonverterInFahrenheit(celsiusInputValue);
    temperatureInFahrenheitInput.value = conversionFromCelsiusToFahrenheit.toFixed(5);
    });

temperatureInFahrenheitInput.addEventListener('input', () => {
    const fahrenheitInputValue = temperatureInFahrenheitInput.value;
    const conversionFromFahrenheitToCelsius = temperatureСonverterInCelsius(fahrenheitInputValue);
    temperatureInCelsiusInput.value = conversionFromFahrenheitToCelsius.toFixed(5); // если после первого числа после запятой стоит ноль, то обрезать, подумать как сделать
    });

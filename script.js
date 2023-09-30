/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */
/* Подставляй текст нового предсказания в .current-forecast h1 */
/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */
/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */
/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */
/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


const container = document.querySelector(".forecasts");
const button = document.querySelector(".forecast-btn");
const forecastTemplate = document.querySelector("#forecast-item");

function generateRandom(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
};

button.addEventListener('click', function() {
    function makeForecastByTemplate(title, chances) {
        const forecast = forecastTemplate.content.cloneNode(true);
        forecast.querySelector("h3").textContent = title;
        forecast.querySelector("p").textContent = chances;
        return forecast;
    }

    const predictionNumber = generateRandom(1, 5);

    let prediction = '';
    let probability = generateRandom(0, 100);
    switch (predictionNumber) {
        case 1:
            prediction = "Тебя ждут успехи в работе";
            break;
        case 2:
            prediction = "Тебя ждёт ужин в замечательной компании";
            break;
        case 3:
            prediction = "Тебя ждут приятные хлопоты";
            break;
        case 4:
            prediction = "Это будет замечательный день";
            break;
        default:
            prediction = "Попробуй еще раз";
            break;
    }

    const currentPrediction = document.querySelector("h1");
    currentPrediction.textContent = prediction;
    const currentProbability = document.querySelector("p");
    currentProbability.textContent = 'Вероятность:' + probability + '%';

    const forecast = makeForecastByTemplate(prediction, 'Вероятность:' + probability + '%');
    container.prepend(forecast);
})
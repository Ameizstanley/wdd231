const town = document.createElement('h5');
const currentTemp = document.createElement('p');
const weatherIcon = document.createElement('div');
const captionDesc = document.createElement('p');


const lat = "5.509166153505081";
const long = "7.04298994112353";
const key = "fc274217c5e818b582ca518b11e3d8e1";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;



async function apifetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        }else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
    
}

function displayWeather(data){
    town.innerHTML = `City: ${data.name}`;
    currentTemp.innerHTML = `Current Temperature: ${data.main.temp}°F, Humidity: ${data.main.humidity}%  sunrise: ${data.sys.sunrise}, sunset: ${data.sys.sunset}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.innerHTML = `<img src="${iconsrc}" alt="${data.weather[0].description}" loading="lazy">`;
    captionDesc.innerHTML = `weather description: ${data.weather[0].description}`;
}

const weatherCard = document.querySelector('.current-content');
weatherCard.appendChild(town);
weatherCard.appendChild(currentTemp);
weatherCard.appendChild(weatherIcon);
weatherCard.appendChild(captionDesc);


apifetch();


const myKey = "fc274217c5e818b582ca518b11e3d8e1"; // Use the same valid key as above


const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${myKey}`;
async function forcastFetch() {
    try{
        const response = await fetch(forcastUrl);
        if (response.ok) {
            const forcast = await response.json();
            console.log(forcast);
            displayForcast(forcast);
        }else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

function displayForcast(forcast){
    const forcastSection = document.querySelector('.forecast-content');
    const forcastSet = document.createElement('div')
    forcastSet.innerHTML = `<p>Today: ${forcast.list[1].main.temp}'F</p>
    <p>Tommorow: ${forcast.list[12].main.temp}'F</p>
    <p>Day after tommorow: ${forcast.list[20].main.temp}'F</p>`;

    forcastSection.appendChild(forcastSet);

}



forcastFetch();
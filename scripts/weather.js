const cityName = document.querySelector('#city-name');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myLat = "49.75070929638726";
const myLong ="6.641893388513481";
const myKey = "fc274217c5e818b582ca518b11e3d8e1";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial&`;



async function apifetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
    
}


function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}degree:F' and humidity is ${data.main.humidity}`;
    cityName.innerHTML = `${data.name}`;
    const iconsrc = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

};
apifetch();
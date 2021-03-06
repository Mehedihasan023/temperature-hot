const API_KEY = `bd18ec3299834970d0c62b79d7180060`;

document.getElementById('city').style.display='none';
document.getElementById('weather-icon').style.display='none';
document.getElementById('condition').style.display='none';
document.getElementById('temperature').style.display='none';
document.getElementById('celsius').style.display='none';
const searchTemperature =()=>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const setInnerText =(id,text) =>{
    document.getElementById(id).innerText=text;
}

const displayTemperature = temperature =>{
    setInnerText('city',temperature.name);
    setInnerText('temperature',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);
    
    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon =document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url);


    
document.getElementById('city').style.display='block';
document.getElementById('weather-icon').style.display='inline';
document.getElementById('condition').style.display='block';
document.getElementById('temperature').style.display='inline';
document.getElementById('celsius').style.display='inline';
}
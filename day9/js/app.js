let Search = document.querySelector('.search');
let City = document.querySelector('.city');
let Country = document.querySelector('.country');
let ShortDesc = document.querySelector('.short-desc');
let Visibility = document.querySelector('.visibility span');
let Wind = document.querySelector('.wind span');
let sun = document.querySelector('.sun span');
let Values = document.querySelector('.value');
let content = document.querySelector('.content');
let time = document.querySelector('.time');
async function changeWeatherUI(){
   let capitalSearch = Search.value.trim();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=9ca3fda6c50224031d9d61891944c1a4`;
    let data = await fetch(apiURL).then(res => res.json());
    console.log(data);
    if(data.cod == 200){
        content.classList.remove('hide');
        City.innerText = data.name;
        Country = data.sys.country;
        Visibility.innerText = data.visibility + 'm';
        Wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        Values.innerText = Math.floor(data.main.temp - 273.15);
        time.innerText = new Date().toLocaleString('vi')
    }else{
        content.classList.add('hide');
        console.log(data.cod);
    }
}
Search.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
        changeWeatherUI()
    }
})
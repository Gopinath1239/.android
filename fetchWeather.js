 function fetchWeather(){
    var request=new XMLHttpRequest();
    var apiKey='2578a5dfba20e6f114d57a2840d9561f';
    var city=document.getElementById("city").value;
    var url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log("running");
    request.open('GET',url,true);
    request.onload=function()
    {
        var result=JSON.parse(this.response);
        console.log(result.main.temp);
    }
    request.send();

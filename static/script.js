window.onload = function(){

    /* Getting all HTML values */
    var weather = document.querySelector('.weather-desc').innerText.toLowerCase();
    var time = document.querySelector('.time').innerText;
    var split_time = time.split(":");
    var hour = split_time[0];
    var minute = split_time[1];

    /* Codes for Night */
    if (hour >= 18 ||hour <= 1){
        function cloud(){
            document.querySelector('.wi').classList.toggle('wi-night-cloudy');
        }
        function rain(){
            document.querySelector('.wi').classList.toggle('wi-night-rain');
        }
        function fog(){
            document.querySelector('.wi').classList.toggle('wi-night-fog');
        }
        function clear(){
            document.querySelector('.wi').classList.toggle('wi-night-clear');
        }
        function hail(){
            document.querySelector('.wi').classList.toggle('wi-night-hail');
        }
        function lightning(){
            document.querySelector('.wi').classList.toggle('wi-night-lightning');
        }
        function snow(){
            document.querySelector('.wi').classList.toggle('wi-night-snow');
        }
        function thunderstorm(){
            document.querySelector('.wi').classList.toggle('wi-night-thunderstorm');
        }
        
        if (weather.includes("cloud")){
            cloud();
        }
        if (weather.includes("rain")){
            rain();
        }
        if (weather.includes("fog")){
            fog();
        }
        if (weather.includes("clear")){
            clear();
        }
        if (weather.includes("hail")){
            hail();
        }
        if (weather.includes("lightning")){
            lightning();
        }
        if (weather.includes("snow")){
            snow();
        }
        if (weather.includes("thunderstorm")){
            thunderstorm();
        }
    }else{

        /* Codes for Day */
        function cloud(){
            document.querySelector('.wi').classList.toggle('wi-day-cloudy');
        }
        function rain(){
            document.querySelector('.wi').classList.toggle('wi-day-rain');
        }
        function fog(){
            document.querySelector('.wi').classList.toggle('wi-day-fog');
        }
        function clear(){
            document.querySelector('.wi').classList.toggle('wi-day-clear');
        }
        function hail(){
            document.querySelector('.wi').classList.toggle('wi-day-hail');
        }
        function lightning(){
            document.querySelector('.wi').classList.toggle('wi-day-lightning');
        }
        function snow(){
            document.querySelector('.wi').classList.toggle('wi-day-snow');
        }
        function thunderstorm(){
            document.querySelector('.wi').classList.toggle('wi-day-thunderstorm');
        }
        
        if (weather.includes("cloud")){
            cloud();
        }
        if (weather.includes("rain")){
            rain();
        }
        if (weather.includes("fog")){
            fog();
        }
        if (weather.includes("clear")){
            clear();
        }
        if (weather.includes("hail")){
            hail();
        }
        if (weather.includes("lightning")){
            lightning();
        }
        if (weather.includes("snow")){
            snow();
        }
        if (weather.includes("thunderstorm")){
            thunderstorm();
        }
    }

}

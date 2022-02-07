


    let weather = {
        apiKey: "6169348de5e29095dc9b5e72f9a607bc",
    
        fetchWeather: function(city){
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&unit=metiric&appid=" 
            + this.apiKey)
            .then((response)=> response.json())
            .then((data)=> this.displayWeather(data));
        },
        displayWeather: function(data){
            const {name} = data;
            const {icon, description} = data.weather[0]
            const{temp, humidity} =data.main;
            const {speed} = data.wind
            document.querySelector(".city-text").innerHTML = "weather in " +name
            document.querySelector(".description").innerHTML = description;
            document.querySelector(".degree").innerHTML = Math.floor(temp - 271) +" °c";
            document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%"
            document.querySelector(".wind").innerHTML = "wind speed: " +speed + "Km/h"
            document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')"
           console.log(data);
            let searchv = document.querySelector(".search-bar").value            
        },
    
        search:function(){
           this.fetchWeather( document.querySelector(".search-bar").value)
           
        }

       
}
    
    
    document.querySelector(".search-icon" ).addEventListener("click", function(){
        weather.search();
    
    })

    document.querySelector(".search-bar").addEventListener("keyup",function(event){
        if(event.key =="Enter"){
            weather.search()
        }
        
        
    })


    const searcBar = document.querySelector(".search-bar")
    let input = document.querySelector("placeholder")

   searcBar.addEventListener("keyup",function(event){
       if(event.key ==="Enter"){
        searcBar.value =" "
       }
   })

 

   

   
   



// console.log(weather.fetchWeather("manchEster"))



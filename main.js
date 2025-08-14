const navContainer = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle");
const navLinks = document.getElementsByClassName("navLink");

toggleBtn.addEventListener("click", function () {
    navContainer.classList.toggle("active");
});

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navContainer.classList.remove("active");
    });
}

navContainer.addEventListener("mouseleave", function () {
    navContainer.classList.remove("active");
});

document.addEventListener("click", function (event) {
    const isClickInsideNav = navContainer.contains(event.target);
    const isClickOnToggle = toggleBtn.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle) {
        navContainer.classList.remove("active");
    }
});

const exploreBtn = document.getElementById("exploreBtn");
exploreBtn.addEventListener("click", function () {
    window.location.href = "pages/expeditions.html";
});


    const apiKey = "d3ea0b58c8d11f6babe918cf9cdf0214"; // Get from https://openweathermap.org/api

    document.getElementById("getWeatherBtn").addEventListener("click", () => {
        const city = document.getElementById("cityInput").value.trim();
        const resultDiv = document.getElementById("weatherResult");

        if (!city) {
            resultDiv.innerHTML = "<p style='color:red;'>Please enter a city name.</p>";
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("City not found");
                return response.json();
            })
            .then(data => {
                resultDiv.innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Feels like: ${data.main.feels_like}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
                `;
            })
            .catch(error => {
                resultDiv.innerHTML = `<p style='color:red;'>${error.message}</p>`;
            });
    });
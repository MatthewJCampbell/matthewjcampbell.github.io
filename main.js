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

const apiKey = "afdd10a1cc59dd64166b1bb1ae5892ee";
document.getElementById("getWeatherBtn").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
        alert("Please enter a city name");
        return;
    }

const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${data.error.info}</p>`;
            return;
        }

document.getElementById("weatherResult").innerHTML = 
`
    <h3>${data.location.name}, ${data.location.country}</h3>
    <p><strong>Temperature:</strong> ${data.current.temperature}°C</p>
    <p><strong>Feels like:</strong> ${data.current.feelslike}°C</p>
    <p><strong>Weather:</strong> ${data.current.weather_descriptions.join(", ")}</p>
    <img src="${data.current.weather_icons[0]}" alt="Weather icon">
`;
})
    .catch(error => {
    console.error("Error fetching weather:", error);
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">Unable to fetch weather data.</p>`;
});
});
// 1. Define the planets array as objects
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "gold", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

// 2. Get the section container
const section = document.querySelector(".listPlanets");

// 3. Loop through each planet and create a div
planets.forEach(planet => {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    // Create moons if there are any
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");

        // Random position around the planet
        const distance = 40 + Math.random() * 60; // distance from planet
        const angle = Math.random() * 2 * Math.PI; // random angle

        moonDiv.style.left = `${50 + distance * Math.cos(angle)}px`;
        moonDiv.style.top = `${50 + distance * Math.sin(angle)}px`;

        planetDiv.appendChild(moonDiv);
    }

    // Append planet to section
    section.appendChild(planetDiv);
});

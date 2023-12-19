let heroes = [
    ["Axe", "Сила"],
    ["Anti-Mage", "Ловкач"],
    ["Bloodseeker", "Ловкач"],
    ["Crystal Maiden", "Интеллект"],
    ["Drow Ranger", "Ловкач"],
    ["Earthshaker", "Сила"],
    ["Faceless Void", "Ловкач"],
    ["Gyrocopter", "Ловкач"],
    ["Huskar", "Сила"],
    ["Invoker", "Интеллект"],
    ["Juggernaut", "Ловкач"],
    ["Kunkka", "Сила"],
    ["Lina", "Интеллект"]
]; 

const container = document.getElementById("heroesContainer");
const nameInput = document.getElementById("heroName");
const classInput = document.getElementById("heroClass");
const addButton = document.getElementById("addButton");

function displayHeroes() {
    container.innerHTML = "";

    heroes.forEach((hero) => {
        const heroCard = document.createElement("div");
        heroCard.classList.add("hero-card");

        const heroName = document.createElement("p");
        heroName.textContent = `Имя: ${hero[0]}`;

        const heroClass = document.createElement("p");
        heroClass.textContent = `Класс: ${hero[1]}`;

        heroCard.appendChild(heroName);
        heroCard.appendChild(heroClass);

        container.appendChild(heroCard);
    });
}

function addHero() {
    const newName = nameInput.value.trim();
    const newClass = classInput.value.trim();

    if (newName !== "" && newClass !== "") {
        const newHero = [newName, newClass];
        heroes.push(newHero);
        displayHeroes();
        nameInput.value = "";
        classInput.value = "";
    }
}

function filterHeroes(classToFilter) {
    
    container.innerHTML = "";

    const filteredHeroes = heroes.filter((hero) => hero[1] === classToFilter);

    filteredHeroes.forEach((hero) => {
        const heroCard = document.createElement("div");
        heroCard.classList.add("hero-card");

        const heroName = document.createElement("p");
        heroName.textContent = `Имя: ${hero[0]}`;

        const heroClass = document.createElement("p");
        heroClass.textContent = `Класс: ${hero[1]}`;

        heroCard.appendChild(heroName);
        heroCard.appendChild(heroClass);

        container.appendChild(heroCard);
    });
}
function resetFilter() {
    displayHeroes();
}

addButton.addEventListener("click", addHero);

displayHeroes();
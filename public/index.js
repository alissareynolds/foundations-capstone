

function displayCards(animals) {
    let container = document.getElementById('card-container');
    container.innerHTML = '';
    animals.forEach(animal => {
        const card = generateCard(animal);
        container.appendChild(card);
    });
}

function generateCard(animal) {
    const card = document.createElement('article');
    card.classList.add('animal-card');
    card.innerHTML = `
    <div class="animal-info">
        <h4 class="animal-name action">${animal.name}</h4>
        <p class="animal-breed">${animal.breed}</p>
    </div>
    <div class="animal-image container" >
        <img class="image" src="${animal.thumbnail}" alt="${animal.summary}">
        <div class="middle">
            <button class="text">Adopt Me!</button>
            </div>
    </div>`
    return card;     
}


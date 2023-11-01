let clicked = false;

function displayCards(animals) {
    let container = document.getElementById('card-container');
    container.innerHTML = '';
    animals.forEach(animal => {
        const card = generateCard(animal);
        container.appendChild(card);
        let heartImage = document.getElementById(`${animal.animal_id}`);
        heartImage.addEventListener('click', () => {
            if (clicked) {
                heartImage.setAttribute("src", "/images/heart-off.png");
                axios.delete("http://localhost:8000/api/user/1/favorites", { animalId: animal.animal_id })
            } else {
                heartImage.setAttribute("src", "/images/heart-on.png");
                axios.post("http://localhost:8000/api/user/1/favorites", { animalId: animal.animal_id })
            }
            clicked = !clicked;
        });

    });
};

function generateCard(animal) {
    const card = document.createElement('article');
    card.classList.add('animal-card');
    card.innerHTML = `
  
    <div class="animal-info">
    <button ><img id="${animal.animal_id}" src="/images/heart-off.png"></button>
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


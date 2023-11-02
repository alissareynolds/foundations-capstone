let animals = [];

document.addEventListener('DOMContentLoaded', () => {
    getFavorites().then(result => {
        animals = result.data;
        displayCards(animals);
        cardContainer = document.getElementById('card-container');
        cardContainer.addEventListener('click', (event) => {
            const id = event.target.id;

            if (id) {
                animals = animals.filter(animal => animal.animal_id != id);
                displayCards(animals);
            }
        });
    });
});


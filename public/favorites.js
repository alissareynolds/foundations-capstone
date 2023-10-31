document.addEventListener('DOMContentLoaded', ($event) => {
    getFavorites().then(result => {
        let animals = result.data;
        console.log(animals, 'animals');
        displayCards(animals);
    });
});
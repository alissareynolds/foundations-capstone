document.addEventListener('DOMContentLoaded', ($event) => {
    getDogs().then(result => {
        let dogs = result.data;
        console.log(dogs, 'dogs');
        displayCards(dogs);
    });
});
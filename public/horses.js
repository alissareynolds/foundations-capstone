document.addEventListener('DOMContentLoaded', ($event) => {
    getHorses().then(result => {
        let horses = result.data;
        console.log(horses, 'horses');
        displayCards(horses);
    });
    
});
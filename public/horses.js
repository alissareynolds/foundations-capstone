document.addEventListener('DOMContentLoaded', () => {
    getHorses().then(result => {
        let horses = result.data;
        console.log(horses, 'horses');
        displayCards(horses);
    });
    
});
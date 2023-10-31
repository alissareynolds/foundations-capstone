document.addEventListener('DOMContentLoaded', ($event) => {
    getCats().then(result => {
        let cats = result.data;
        console.log(cats, 'cats');
        displayCards(cats);
    });
    
});
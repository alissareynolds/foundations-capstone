
document.addEventListener('DOMContentLoaded', () => {
    const animalId = getQueryVariable('animalId');

    getProfile(animalId).then(result => {
        let profile = result.data;
        console.log(profile, 'profile');
        displayProfile(profile);
    });
});

function displayProfile(animal) {
    let profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = '';
    const profile = generateProfile(animal);
    profileContainer.appendChild(profile);
};

function generateProfile(animal) {
    const profile = document.createElement('article');
   
    profile.innerHTML = `

    <h1 class="profile-name">${animal.name}</h1>
    <img class="profile-thumbnail" src="${animal.thumbnail}">
    <section class="profile-bar"><h3 class="profile-breed">${animal.breed}</h3>
    <h4 class="profile-birthdate">${animal.birthdate}</h4>
    <h4 class="profile-color">${animal.color}</h4>
    <h4 class="profile-height">${animal.height}</h4>
    <h4 class="profile-weight">${animal.weight}</h4></section>
    
    <p class="profile-info">${animal.info}</p>
    
    `

    animal.pictures.forEach((picture) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('profile-image');
        imageContainer.innerHTML = `
        <img src="${picture.url}"/>        
        `;
        profile.appendChild(imageContainer);
    });

    return profile;
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
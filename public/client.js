const getAnimals = () => {
   return axios.get("http://localhost:8000/api/animals/");
};

const getHorses = () => {
    return axios.get("http://localhost:8000/api/animals?species=Horse");
};

const getDogs = () => {
    return axios.get("http://localhost:8000/api/animals?species=Dog");
};

const getCats = () => {
    return axios.get("http://localhost:8000/api/animals?species=Cat");
};

const getFavorites = () => {
    return axios.get("http://localhost:8000/api/users/1/favorites");
};

const saveFavorites = () => {
    return axios.post("http://localhost:8000/api/user/1/favorites", );
};

const deleteFavorites = () => {
    return axios.delete("http://localhost:8000/api/user/1/favorites", );
};

const getProfile = (id) => {
    return axios.get("http://localhost:8000/api/animals/" + id);
}
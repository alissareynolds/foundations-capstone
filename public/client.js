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


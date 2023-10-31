const getAnimals = () => {
    axios.get("http://localhost:8000/api/animals/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getHorses = () => {
    return axios.get("http://localhost:8000/api/animals?species=horse/");
};

const getDogs = () => {
    return axios.get("http://localhost:8000/api/animals?species=dog/");
};

const getCats = () => {
    return axios.get("http://localhost:8000/api/animals?species=cat/");
};


const addToDb = id => {
    const storedData = localStorage.getItem(id);
    if (storedData) {
        const newQuantity = parseInt(storedData) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        localStorage.setItem(id, 1);
    }
}

const addToDb2 = id => {
    let userData;
    const storedData = localStorage.getItem('user-data');
    if (storedData) {
        userData = JSON.parse(storedData);
    }
    else {
        userData = {};
    }
    const quantity = userData[id];
    if (quantity) {
        userData[id] = quantity + 1;
    }
    else {
        userData[id] = 1;
    }
    localStorage.setItem('user-data', JSON.stringify(userData));
}

const removeFromDb = id => {
    const storedData = localStorage.getItem('user-data');
    if (storedData) {
        const userData = JSON.parse(storedData);
        if (id in userData) {
            delete userData[id];
            localStorage.setItem('user-data', JSON.stringify(userData));
        }
    }
}
export {
    addToDb,
    addToDb2,
    removeFromDb
};
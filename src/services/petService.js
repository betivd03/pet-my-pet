const baseUrl = 'http://custom-server-softuni.herokuapp.com/jsonstore';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`);
    let pets = await response.json();
    let result = Object.values(pets);
    return result;
};

export const create = async (petData) => {
    let response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petData)
    });

    let result = await response.json();
    return result;
};
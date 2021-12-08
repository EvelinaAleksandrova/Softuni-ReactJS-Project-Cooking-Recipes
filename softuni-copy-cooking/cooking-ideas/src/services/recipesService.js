const baseUrl = 'https://softuni-custom-server-routepet.herokuapp.com/jsonstore';
// https://softuni-custom-server-routepet.herokuapp.com/jsonstore/

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/recipes`);
    let recipes = await response.json();
    let result = Object.values(recipes);

    return result;

}

export const create = async (recipeData) => {
    let response = await fetch(`${baseUrl}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(recipeData)
    });
    let result = await response.json();
    return result;
};

export const getOne = (recipeId) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`)
        .then(result => result.json())
};
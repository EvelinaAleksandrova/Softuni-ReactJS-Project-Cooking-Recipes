// const baseUrl = 'https://softuni-custom-server-routepet.herokuapp.com/jsonstore';
// https://softuni-custom-server-routepet.herokuapp.com/jsonstore/
//
// const baseUrl = 'https://server-cooking.herokuapp.com/jsonstore/jsonstore';
const baseUrl = 'http://localhost:3030/data';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/recipes`);
    let recipes = await response.json();
    let result = Object.values(recipes);

    return result;

}

export const create = async (recipeData, token) => {
    let response = await fetch(`${baseUrl}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...recipeData, likes: []})
    });
    let result = await response.json();
    return result;
};

export const removeRecipe = (recipeId, token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': token
        }
    })
}

export const getOne = (recipeId) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`)
        .then(result => result.json())
};
// const baseUrl = 'https://softuni-custom-server-routepet.herokuapp.com/jsonstore';
// https://softuni-custom-server-routepet.herokuapp.com/jsonstore/
// const baseUrl = 'https://server-cooking.herokuapp.com/jsonstore/jsonstore';


import * as requestRecipe from "./requestRecipe";

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => {
    let result = requestRecipe.get(`${baseUrl}/recipes`);
    return result;
}

// export const getMyRecipes = (ownerId) => {
//     let query = encodeURIComponent(`_ownerId="${ownerId}"`);
//     return requestRecipe.get(`${baseUrl}/recipes?where=${query}`);
// }

export const update = (recipeId, recipeData) => {
    requestRecipe.put(`${baseUrl}/recipes/${recipeId}`, recipeData);
};

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

export const likeRecipe = (recipeId, recipe, token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(recipe)
    }).then(res => res.json());
}
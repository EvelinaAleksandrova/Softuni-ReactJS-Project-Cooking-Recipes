const baseUrl = 'https://softuni-custom-server-routepet.herokuapp.com/jsonstore';
// https://softuni-custom-server-routepet.herokuapp.com/jsonstore/

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/articles`);
    let recipes = await response.json();
    let result = Object.values(recipes);

    return result;

}

export const create = async (articleData) => {
    let response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(articleData)
    });
    let result = await response.json();
    return result;
};

export const getOne = (articleId) => {
    return fetch(`${baseUrl}/articles/${articleId}`)
        .then(result => result.json())
};
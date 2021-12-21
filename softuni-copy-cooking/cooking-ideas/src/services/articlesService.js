// const baseUrl = 'https://softuni-custom-server-routepet.herokuapp.com/jsonstore';
// https://softuni-custom-server-routepet.herokuapp.com/jsonstore/
// https://server-cooking.herokuapp.com/jsonstore
// const baseUrl = 'https://server-cooking.herokuapp.com/jsonstore';

const baseUrl = 'http://localhost:3030/data';
export const getAll = async () => {
    let response = await fetch(`${baseUrl}/articles`);
    let articles = await response.json();
    let result = Object.values(articles);

    return result;
}

export const create = async (articleData,token) => {
    let response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization':token,
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
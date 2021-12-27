// const baseUrl = 'https://softuni-custom-server-routepet.herokuapp.com/jsonstore';
// https://softuni-custom-server-routepet.herokuapp.com/jsonstore/
// https://server-cooking.herokuapp.com/jsonstore
// const baseUrl = 'https://server-cooking.herokuapp.com/jsonstore';

import {requestArticle} from "./requestArticle";

const baseUrl = 'http://localhost:3030/data';

export const getAll = async () => {
    let result = await requestArticle(`${baseUrl}/articles`);
    return result;
}

export const create = async (articleData, token) => {
    let response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...articleData, likes: []})
    });
    let result = await response.json();
    return result;
};
export const removeArticle = (articleId, token) => {
    return fetch(`${baseUrl}/articles/${articleId}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': token
        }
    })
}
export const getOne = (articleId) => {
    return fetch(`${baseUrl}/articles/${articleId}`)
        .then(result => result.json())
};
export const likeArticle = (articleId, article, token) => {
    return fetch(`${baseUrl}/articles/${articleId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(article)
    }).then(res => res.json());
}
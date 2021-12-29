import * as request from '../services/requestArticle';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, articleId) => request.post(`${baseUrl}/likes`, {userId, articleId});

export const getArticleLikes = (articleId) => {
    const query = encodeURIComponent(`articleId="${articleId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};
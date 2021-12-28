export const requestRecipe = async (method, url, data) => {
    let promise = null;

    if (method === 'GET') {
        promise = fetch(url);
    } else {
        promise = fetch(url, {
            method,
            headers: {
                'content-type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(data)
        });
    }

    return promise.then(responseHandler);
};

async function responseHandler(res) {
    let jsonData = await res.json();

    if (res.ok) {
        return Object.values(jsonData);
    } else {
        throw jsonData;
    }
};

function getToken() {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            throw {message: 'You must be authenticated'};
        }

        let user = JSON.parse(userItem);

        return user.accessToken;
    } catch (err) {
        console.log(err);
    }
}

export const get = requestRecipe.bind(null, 'GET');
export const put = requestRecipe.bind(null, 'PUT');
export const post = requestRecipe.bind(null, 'POST');
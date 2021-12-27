export const requestRecipe = async (url) => {
    // let result = null;
    //
    // if (method === 'GET') {
    //     result = fetch(url);
    // } else {
    //     result = fetch(url, {
    //         method,
    //         headers: {
    //             'content-type': 'application/json',
    //             'X-Authorization': getToken()
    //         },
    //         body: JSON.stringify(data)
    //     });
    // }

    return fetch(url).then(responseHandler);
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
export const login = async (email, password) => {
    let response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

//show notification
    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    } else {
        throw  jsonResult.message;
    }

};
export const register = (email, password) => {
    return fetch('http://localhost:3030/users/register', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(res => res.json());
};

export const logout = (token) =>{
    return fetch('http://localhost:3030/users/logout',{
        headers:{
            'X-Authorization' :token,
        }
    })
}

export const getUser = () => {
    let email = localStorage.getItem('email');

    return email;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};
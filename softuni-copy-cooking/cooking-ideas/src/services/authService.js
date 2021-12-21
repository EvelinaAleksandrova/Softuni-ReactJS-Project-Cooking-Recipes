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
        return response.json();
    } else {
        throw  jsonResult.message;
    }

};


export const logout = () =>{
    localStorage.removeItem('email');
}

export const getUser = () => {
    let email = localStorage.getItem('email');

    return email;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};
const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let jsonResult = await res.json();
    
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const register = (email, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json());
}

export const logout = (token) => {
    fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token
        },
    });
}

export const getUser = () => {
    let user = localStorage.getItem('email');

    return user;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};
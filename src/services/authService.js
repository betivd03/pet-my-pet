export const login = (email, password) => {
    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(res => res.json())
};

export const logout = () => {
    localStorage.removeItem('email');
};

export const getUser = () => {
    let user = localStorage.getItem('email');

    return user;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};
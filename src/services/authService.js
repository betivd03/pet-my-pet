export const login = async (email, password) => {
    let res = await fetch('http://localhost:3030/users/login', {
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
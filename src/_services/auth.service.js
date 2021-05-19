// import { authHeader } from '../_helpers';

function login(username, password) {
    console.log(username);
    console.log(password);
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };

    // return fetch(`https://bot.casinoauto.io/api/auth/login`, requestOptions)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));

    //         return user;
    //     });
}

function logout() {
    console.log('logout')
    // remove user from local storage to log user out
    // localStorage.removeItem('user');
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`https://bot.casinoauto.io/api/book`, requestOptions);
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }

export const authService = {
    login,
    logout,
    // getAll
}
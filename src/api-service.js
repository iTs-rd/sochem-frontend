export default class API {
    static loginUser(body) {
        return fetch(`https://api.sochem.org/api/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            }).then( resp => resp.json())
    }

    static registerUser(body) {
        return fetch(`https://api.sochem.org/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            }).then( resp => resp.json())
    }

    static getEvents(token) {
        return fetch(`https://api.sochem.org/api/events/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`,
            }
            }).then( resp => resp.json())
    }

    static newComment(body, token){
        return fetch('https://api.sochem.org/api/forum-comment/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`,
            },
            body: JSON.stringify(body)
            }).then( resp => resp.json())
    }
    static getEvents(token) {
        return fetch(`https://api.sochem.org/api/events/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`,
            }
            }).then( resp => resp.json())
    }
}
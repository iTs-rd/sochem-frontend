export default class API {
    static loginUser(body) {
        return fetch(`${process.env.REACT_APP_API_URL}/api/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            }).then( resp => resp.json())
    }

    static registerUser(body) {
        return fetch(`${process.env.REACT_APP_API_URL}/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            }).then( resp => resp.json())
    }

    static getEvents(token) {
        return fetch(`${process.env.REACT_APP_API_URL}/api/events/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`,
            }
            }).then( resp => resp.json())
    }

    static newComment(body, token){
        return fetch(`${process.env.REACT_APP_API_URL}/api/forum-comment/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`,
            },
            body: JSON.stringify(body)
            }).then( resp => resp.json())
    }
    static getEvents(token) {
        return fetch(`${process.env.REACT_APP_API_URL}/api/events/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`,
            }
            }).then( resp => resp.json())
    }
}
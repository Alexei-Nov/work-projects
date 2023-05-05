const requestURL = "https://jsonplaceholder.typicode.com/userss"

function request(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    const params = {
        method: method,
        // body: JSON.stringify(body),// GET method cannot have body
        headers: headers
    }
    return fetch(url, params)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return response.json().then(error => {
                const er = new Error('Ошибка')
                er.data = error
                throw er
            })
        })
}

const body = {
    name: 'Some Name',
    city: 'Some City'
}

request('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))
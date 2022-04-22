const login = (email, password) => {
    return fetch(`http://localhost:3000/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok.')
            }
            
            return response.json();
        })

}

export {
    login
}
export const register = (user:any): any => {
    fetch('http://localhost:5000/api/auth/signup', {
        headers: {
            'Content-Type': 'application/json',
        },
        method : 'POST',
        body : JSON.stringify(user)
    })
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        return data
    })
} 
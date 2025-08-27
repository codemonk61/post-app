const BASE_URL = 'http://localhost:5000'

export const register = (user:any): any => {
    fetch(`${BASE_URL}/api/auth/signup`, {
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

export const login = async (user: any): Promise<any> => {
    try {
        const response = await fetch(`${BASE_URL}/api/auth/login`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(user)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}
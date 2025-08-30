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

// posts.ts
export type PostType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export const getPostById = async (id: string) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://localhost:5000/api/post/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  console.log("Fetched Post:", data);
  return data;
};


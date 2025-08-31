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

export const createPost = async (postData: any) => {
  const token = localStorage.getItem("token");

  // create FormData instead of raw JSON
  const formData = new FormData();
  formData.append("title", postData.title);
  formData.append("description", postData.description);

  if (postData.image) {
    formData.append("image", postData.image);
  }

  const res = await fetch(`${BASE_URL}/api/post`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`, 
    },
    body: formData,
  });

  const data = await res.json();
  console.log("Created Post:", data);
  return data;
};


export const getPostById = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/api/post/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  console.log("Fetched Post:", data);
  return data;
};


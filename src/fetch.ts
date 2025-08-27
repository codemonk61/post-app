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

const posts: PostType[] = [
  {
    id: 1,
    title: "Exploring Tailwind CSS",
    description:
      "Tailwind CSS lets you build modern UIs quickly with utility-first classes. It's a game-changer for frontend developers.",
    imageUrl: "https://picsum.photos/seed/tailwind/400/250",
  },
  {
    id: 2,
    title: "React + TypeScript",
    description:
      "Using TypeScript with React gives you type safety and a better developer experience. Let's dive into it!",
    imageUrl: "https://picsum.photos/seed/react/400/250",
  },
  {
    id: 3,
    title: "MERN Stack Projects",
    description:
      "Building projects with MongoDB, Express, React, and Node.js helps sharpen your full-stack skills.",
    imageUrl: "https://picsum.photos/seed/mern/400/250",
  },
  {
    id: 4,
    title: "JavaScript ES2025",
    description:
      "New features in JavaScript are coming every year. Learn how to use modern ES features effectively.",
    imageUrl: "https://picsum.photos/seed/js/400/250",
  },
];

// Fake API call using async/await
export const getPosts = async (): Promise<PostType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 500); // simulate network delay
  });
};

// (Optional) Get single post by ID
export const getPostById = async (id: number): Promise<PostType | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts.find((p) => p.id === id));
    }, 400);
  });
};

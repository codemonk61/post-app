import Header from "../components/header/Header"
import Post from "../components/Post/Post"
import { useEffect, useState } from 'react'
import { getPostById } from "../fetch";
import { getUserFromToken } from "../utility/auth";


const PostPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const userInfo = getUserFromToken();
      console.log("User Info:", userInfo);
      try {
        const data = await getPostById(userInfo?.id || "");
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch posts", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts()
  }, [])

  if (loading) {
    return <>Loading...</>
  }


  return (
    <>
      <Header />
      {error.message && <div>{error.message}</div>}
      {
        posts.map((post) => {
          return <Post
            title={post.title}
            imageUrl={post.imageUrl}
            description={post.description}
          />
        })
      }

    </>
  )
}

export default PostPage
import Header from "../components/header/Header"
import Post from "../components/Post/Post"
import { useEffect, useState } from 'react'
import { getPosts } from "../fetch"

const PostPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
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
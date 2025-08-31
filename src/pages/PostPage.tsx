import Header from "../components/header/Header"
import Post from "../components/Post/Post"
import { useEffect, useState } from 'react'
import { createPost, getPostById } from "../fetch";
import { getUserFromToken } from "../utility/auth";
import Button from "../components/Button/Button";
import CreatePostModal from "../components/postModal/CreatePostModal";

const PostPage = () => {

  const [posts, setPosts] = useState<any>([]);
  const [userPost, setUserPost] = useState<any>({title: "", description: "", image: ""});
  const [loading, setLoading] = useState<any>(true);
  const [error, setError] = useState<any>(false);
  const [showModal, setShowModal] = useState(false);

  const handleCreatePostModal = () => {
    setShowModal(true);
  };

  const createUserPost = async(postData: any) => {
    const res = await createPost(postData)
    const data= await res.json();
    console.log("Post Created:", data);
    setUserPost(postData);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data: any = await getPostById();
        setPosts(data);
      } catch (error: any) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  console.log("Posts:", userPost);
  return (
    <>
      {showModal && (
        <CreatePostModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onCreate={(postData: any) => {
            createUserPost(postData);
            setShowModal(false);
          }}
        />
      )}
      <Header />
      {error ? (
        <div>{posts?.message}</div>
      ) : (
        <>
          {posts && posts.length > 0 ? (
            posts.map((post: any, index: any) => (
              <Post
                key={index}
                title={post.title}
                imageUrl={post.image}
                description={post.description}
              />
            ))
          ) : (
            <div className="flex justify-center items-center flex-col h-full">
              <p>No posts found.</p>
              <Button cta="Create Post" onClick={handleCreatePostModal} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PostPage;

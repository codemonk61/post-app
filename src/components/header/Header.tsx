import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../Button/Button";
import { createPost } from "../../fetch";
import CreatePostModal from "../postModal/CreatePostModal";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userPost, setUserPost] = useState<any>({ title: "", description: "", image: "" });

  const handleCreatePostModal = () => {
    setShowModal(true);
  };

  const createUserPost = async (postData: any) => {
    const res = await createPost(postData)
    const data = await res.json();
    console.log("Post Created:", data);
    setUserPost(postData);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-indigo-600">MyPost</div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
              <a href="/" className="hover:text-indigo-600">
                Home
              </a>
              <a href="/posts" className="hover:text-indigo-600">
                Posts
              </a>
              <a href="/about" className="hover:text-indigo-600">
                About
              </a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex space-x-3">
              <Button cta="Create Post" onClick={() => handleCreatePostModal()} />
              <Button cta="Logout" onClick={() => handleLogout()} />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-3">
            <a href="/" className="block hover:text-indigo-600">
              Home
            </a>
            <a href="/posts" className="block hover:text-indigo-600">
              Posts
            </a>
            <a href="/about" className="block hover:text-indigo-600">
              About
            </a>
            <div className="space-y-2">
              <Button cta="Login" onClick={() => { }} />
              <Button cta="SignUp" onClick={() => { }} />
            </div>
          </div>
        )}
      </header>
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
    </>
  );
};

export default Header;


import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { deleteBlogs, getBlogs } from "../utils/saveBookmark";
import NoBookmarks from "../components/NoBookmarks";

export default function Bookmarks() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleBookmark = (id) => {
    deleteBlogs(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  if(blogs.length < 1) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-120px)]">
        <NoBookmarks/>
      </div>
    );
  }
  return (
    <div className="grid justify-center p-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} deletable={true} handleBookmark={handleBookmark} />
      ))}
    </div>
  );
}

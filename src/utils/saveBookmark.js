import toast from "react-hot-toast";
export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

export const saveBlogs = (blog) => {
  let blogs = getBlogs();
  const isExists = blogs.find((b) => b.id === blog.id);
  if (isExists) {
    return toast.error("Blog already exists!");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog saved successfully!");
};
export const deleteBlogs = (id) => {
    let blogs = getBlogs();
    const index = blogs.filter((b) => b.id !== id);
    localStorage.setItem("blogs", JSON.stringify(index));
    toast.success("Blog deleted successfully!");
}

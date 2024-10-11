import { Link } from "react-router-dom";

export default function NoBookmarks() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold"> No Bookmarks Found</h1>
      <Link
        to={"/blogs"}
        className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
      >
        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
        <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
          Browser Blogs
        </span>
      </Link>
    </div>
  );
}

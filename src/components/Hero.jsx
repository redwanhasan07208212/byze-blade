import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              Welcome to{" "}
              <span className="font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
                {" "}
                ByteBlaze
              </span>
            </h1>
            <p className="py-6">
              ByteBlaze is the bridge between the complex world of technology
              and the curious minds eager to understand it
            </p>
            <div className="flex gap-2 items-center justify-center">
              <Link
                to={'/blogs'}
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Read Blogs
                </span>
              </Link>
              <Link
                to={'/bookmarks'}
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  BookMarks
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

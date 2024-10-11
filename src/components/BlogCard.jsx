import { Link } from "react-router-dom";
import placeHolder from "../assets/404.jpg";
import { MdOutlineDeleteSweep } from "react-icons/md";
/* eslint-disable react/prop-types */
export default function BlogCard({ blog, deletable,handleBookmark  }) {
  const { social_image, title, description, published_at, id } = blog;
  return (
    <div className="max-w-sm relative transition hover:scale-105 border-2 border-primary hover:border-secondary border-opacity-30 mx-auto group hover:no-underline focus:no-underline">
      <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={social_image || placeHolder}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>
            {description.length > 200
              ? description.slice(0, 200) + "..."
              : description}
          </p>
        </div>
      </Link>
      <button onClick={()=>handleBookmark(id)} className="absolute -top-4 -right-4">{deletable && <MdOutlineDeleteSweep className="h-8 w-8 bg-primary text-secondary hover:bg-primary rounded-lg"/>}</button>
    </div>
  );
}

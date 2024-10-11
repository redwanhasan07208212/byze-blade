import { Link, useLoaderData } from "react-router-dom";
import placeHolder from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export default function Content() {
  const blog = useLoaderData();
//   console.log(blog);
  const { social_image, title, id, tags,body_html } = blog;
  return (
    <div>
      <div className=" transition p-2 border-2 mx-auto group hover:no-underline focus:no-underline">
        <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#">
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src={social_image || placeHolder}
          />
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
            {tags.map((tag) => (
              <Link
                key={tag}
                href="#"
                className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
              >
                #{tag}
              </Link>
            ))}
          </div>
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            {
                // body_html
                //  ? <div dangerouslySetInnerHTML={{ __html: body_html }} />
                //   : "Loading..."

                <Markdown rehypePlugins={[rehypeRaw,rehypeSanitize]}>{body_html}</Markdown>
            }
          </div>
        </Link>
      </div>
    </div>
  );
}


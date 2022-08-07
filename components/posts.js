import Image from "next/image";

function ImageLoader({src}) {
  return `https://source.unsplash.com/${src}`;
}

export default function Posts({posts}) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <li className="bg-zinc-800 " key={post.id}>
          <Image
            loader={ImageLoader}
            src="fs6NPHYMN7o"
            width={600}
            height={300}
            layout="responsive"
            alt="Placeholder image"
          />
          <div className="relative">
            <h3 className="w-full text-2xl font-semibold uppercase text-center transform -translate-y-3 ">
              {post.title}
            </h3>
            <p className="px-5 pb-5">{post.body}</p>
          </div>
        </li>
      ))}
    </ul>
  ); //populate posts here
}

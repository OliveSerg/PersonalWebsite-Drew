import Image from "next/image";

export default function Posts({posts}) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Image src='https://via.placeholder.com/150' width={150} height={150} alt="Placeholder image"/>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </li>
      ))}
    </ul>
  ); //populate posts here
}

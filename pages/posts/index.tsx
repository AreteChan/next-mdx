import { getPostNames } from "@/lib/parse-posts";
import { GetStaticProps } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = () => {
    const posts = getPostNames();
  
    return {
      props: {
        posts,
      },
    };
  };

// 获取目录下的所有文件名
export default function Posts({ posts }: { posts: string[] }) {
  return (
    <div className="container prose dark:prose-invert slide-enter-content">
      {posts.map((post) => (
        <Link href={`/posts/${post}`} className="no-underline" key={post}>
          <h1 className='block text-3xl mt-4 '>{post}</h1>
        </Link>
      ))}
    </div>
  );
}
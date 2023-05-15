import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  // 추가적인 메타데이터 필드 추가
};

type BlogProps = {
  posts: Post[];
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("public", "posts", "develop")); // .mdx 파일이 위치한 폴더 경로
  const posts = files.map((filename) => {
    const filePath = path.join("public", "posts", "develop", filename);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(source);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: new Date(data.date).toISOString(),
      author: data.author,
      // 추가적인 메타데이터 필드 추가
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function DevelopPosts({ posts }: BlogProps) {
  return (
    <div>
      <h1>Develop Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a
              onClick={() => {
                console.log("slug", post);
              }}
              href={`/posts/develop/${post.slug}`}
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

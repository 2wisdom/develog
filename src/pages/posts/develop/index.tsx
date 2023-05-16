import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../../../utils/mdxUtils";
import styled from "@emotion/styled";

const Wrapper = styled.div``;

export default function Index({ posts }: any) {
  return (
    <Wrapper>
      <ul>
        {posts.map((post: any) => (
          <li key={post.filePath}>
            <Link
              as={`/posts/develop/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/posts/develop/[slug]`}
            >
              {post.data.title}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}

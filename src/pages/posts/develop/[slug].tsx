import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

interface PostPageProps {
  source: any; // 여기에 MDXRemote에서 사용하는 타입을 지정해주어야 합니다.
}

export default function PostPage({ source }: PostPageProps) {
  return <MDXRemote {...source} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), "public", "posts", "develop");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(".mdx", "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { slug } = params!;
  const filePath = path.join(
    process.cwd(),
    "public",
    "posts",
    "develop",
    `${slug}.mdx`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  const source = await serialize(content);

  return {
    props: {
      source,
    },
  };
};

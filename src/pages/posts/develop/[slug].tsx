import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import CustomLink from "@/components/CustomLink";
import { postFilePaths, POSTS_PATH } from "../../../../utils/mdxUtils";
import { doHyeon } from "../../../styles/theme";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    max-width: 1000px;
  }

  main {
    padding-left: 60px;
    padding-right: 60px;
  }

  main a {
    color: #3f51b5;
  }

  @media screen and (max-width: 768px) {
    main {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    h3 {
      font-size: 2.5rem;
    }

    main {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("../../../components/TestComponent")),
  Head,
};

export default function PostPage({ source, frontMatter }: any) {
  console.log("frontMatter", frontMatter);
  return (
    <>
      <Head>
        <title>Lizzie&apos;s Develog | {frontMatter.title}</title>
        <meta
          name="description"
          content={`뚝딱뚝딱 개발일기 🛠️ ${frontMatter.description}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <header>
          <nav>
            <Link href="/posts/develop" legacyBehavior>
              <Typography
                sx={{ paddingBottom: 2, color: "#575757", cursor: "pointer" }}
              >
                👈 메뉴로 돌아가기
              </Typography>
            </Link>
          </nav>
        </header>
        <div className="post-header">
          <Typography
            variant="h3"
            sx={{
              fontFamily: doHyeon.style.fontFamily,
              borderBottom: "1px solid #d4d4d4",
              padding: 4,
              marginBottom: 4,
            }}
          >
            {frontMatter.title}
          </Typography>
        </div>
        <img src={frontMatter.image} alt={frontMatter.title} />
        <main>
          <MDXRemote {...source} components={components} />
        </main>
        <nav>
          <Link href="/posts/develop" legacyBehavior>
            <Typography
              sx={{
                paddingTop: 5,
                paddingBottom: 3,
                color: "#575757",
                cursor: "pointer",
              }}
            >
              👈 메뉴로 돌아가기
            </Typography>
          </Link>
        </nav>
      </Wrapper>
    </>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../../../utils/mdxUtils";
import styled from "@emotion/styled";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { doHyeon } from "../../../styles/theme";
import Head from "next/head";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  .develop-image {
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .post-link {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  @media screen and (max-width: 1024px) {
    a {
      width: 90%;
    }

    .post-card {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .post-card {
      height: 400px;
    }

    .post-cardactionarea {
      display: inline-block;
    }

    .post-cardmedia {
      height: 200px;
    }

    .post-card button div div {
      align-items: center;
    }
  }
`;

export default function Index({ posts }: any) {
  // client 측에서 post 역순으로 정렬
  const reversedPosts = posts.slice().reverse();
  return (
    <>
      <Head>
        <title>Lizzie&apos;s Develog | 개발일기</title>
        <meta
          name="description"
          content="재밌어보이는건 다하는 응애 개발자 😇 뚝딱뚝딱 개발일기 🛠️"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Image
          className="develop-image"
          src="/develop.jpeg"
          alt="develop"
          width={300}
          height={300}
        />
        <Typography
          variant="h3"
          style={{ fontFamily: doHyeon.style.fontFamily }}
        >
          뚝딱뚝딱 개발일기
        </Typography>
        <Divider />
        {reversedPosts.map((post: any) => (
          <Link
            className="post-link"
            as={`/posts/develop/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/develop/[slug]`}
            key={post.filePath}
          >
            <Card
              className="post-card"
              sx={{ width: 900, height: 200, margin: 1, display: "flex" }}
            >
              <CardActionArea
                className="post-cardactionarea"
                sx={{ display: "flex" }}
              >
                <CardMedia
                  className="post-cardmedia"
                  sx={{ flex: 2, height: 200, textAlign: "left" }}
                  image={post.data.image}
                  title="title"
                />
                <CardContent className="post-cardcontent" sx={{ flex: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, marginBottom: 5 }}
                  >
                    {post.data.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#575757" }}>
                    {post.data.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </Wrapper>
    </>
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

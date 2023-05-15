import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 80vh;

  .profile-image {
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .profile-image:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    transition: box-shadow 0.3s, transform 0.3s;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Lizzie&apos;s Develog</title>
        <meta
          name="description"
          content="재밌어보이는건 다하는 응애 개발자 😇 뭐든지 만드는 Lizzie의 뚝딱공방 🛠️"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>
          <Image
            className="profile-image"
            src="/index-profile.jpeg"
            alt="profile"
            width={300}
            height={280}
          />
          <Typography variant="h2">재밌어보이는건 다하는 응애개발자</Typography>
          <Typography variant="h5">
            개발이랑&nbsp;
            <span style={{ color: "#d0d7de" }}>
              &#40;개발만하면 재미없으니까&#41;
            </span>
            &nbsp;일상 이것저것 블로그
          </Typography>
        </Wrapper>
      </main>
    </>
  );
}

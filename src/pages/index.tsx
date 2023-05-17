import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { doHyeon } from "../styles/theme";

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

  h2 {
    display: flex;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    .profile-image {
      width: 250px;
      height: auto;
    }

    h2 {
      flex-direction: column;
      font-size: 3.3rem;
    }

    h5 {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 480px) {
    h2 {
      font-size: 2.8rem;
    }

    h5 {
      display: flex;
      flex-direction: column;
    }
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
            width={280}
            height={280}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: doHyeon.style.fontFamily,
            }}
          >
            <span>재밌어보이는건&nbsp;다하는&nbsp;</span>
            <span>응애개발자</span>
          </Typography>
          <Typography variant="h5">
            <span>개발이랑&nbsp;</span>
            <span style={{ color: "#d0d7de" }}>
              &#40;개발만하면 재미없으니까&#41;
            </span>
            <span>&nbsp;일상 이것저것 블로그</span>
          </Typography>
        </Wrapper>
      </main>
    </>
  );
}

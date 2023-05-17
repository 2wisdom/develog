import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { doHyeon, gothicA1 } from "../styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  height: 80vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;

    h4 {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 480px) {
    h3 {
      font-size: 2.5rem;
    }

    h4 {
      font-size: 1.5rem;
    }
  }
`;

export default function Custom404() {
  return (
    <Wrapper>
      <div className="image-box">
        <Image src="/404.jpeg" alt="fear-memoji" width={300} height={300} />
      </div>
      <div className="text-box">
        <Typography
          variant="h3"
          style={{ color: "#c62828", fontFamily: doHyeon.style.fontFamily }}
        >
          404 - Page Not Found
        </Typography>
        <Typography variant="h4">
          <span>아무래도 존재하지 않는 페이지로 </span>
          <span>오신 것 같은데요 • • •</span>
        </Typography>
      </div>
    </Wrapper>
  );
}

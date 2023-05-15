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
          아무래도 존재하지 않는 페이지로 오신 것 같은데요 • • •
        </Typography>
      </div>
    </Wrapper>
  );
}

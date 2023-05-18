import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

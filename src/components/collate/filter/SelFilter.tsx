import { Box, Divider, IconButton } from "@mui/material";
import React from "react";

interface Props {
  five: boolean;
  six: boolean;
  toggleFive: () => void;
  toggleSix: () => void;
}
const SelFilter = (props: Props) => {
  const { five, six, toggleFive, toggleSix } = props;

  const r = 4;
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box>
        <Divider sx={{ mt: 1, mb: 0.5, }} variant="middle" flexItem>
          Stulifera Navis
        </Divider>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        width="100%"
        sx={{
          "& .MuiIconButton-root": {
            height: "5.5rem"
          },
          "& img": {
            height: "100%",
          }
        }}
      >
        <IconButton
          className={five ? "active" : "inactive"}
          sx={{ borderRadius: `${r}px 0px 0px ${r}px` }}
          onClick={() => toggleFive()}
        >
          <Box component="img" src="/img/misc/v5.png" />
        </IconButton>
        <IconButton
          className={six ? "active" : "inactive"}
          sx={{ borderRadius: `0px ${r}px ${r}px 0px` }}
          onClick={() => toggleSix()}
        >
          <Box component="img" src="/img/misc/v6.png" />
        </IconButton>
      </Box>
    </Box>);
}

export default SelFilter;
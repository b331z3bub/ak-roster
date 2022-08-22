import React from "react";
import { Operator } from "../../../types/operator";
import { Box, Button } from "@mui/material";
import { HorizontalRule, KeyboardArrowDownSharp, KeyboardArrowUpSharp } from "@mui/icons-material";

interface Props {
  op: Operator;
  onChange: (
    operatorId: string,
    property: string,
    value: number | boolean
  ) => void;
}
const SkillLevel = React.memo((props: Props) => {
  const { op, onChange } = props;

  const previousSkillLevel = op.skillLevel > 4 ? 4 : 1;
  const nextSkillLevel = op.skillLevel < 4 ? 4 : 7;

  function updateRank(rank: number) {
    onChange(op.id, "skillLevel", rank);
  };
  const m1 = (
    <Button
      onClick={() => updateRank(op.skillLevel - 1)}
      disabled={!op.owned || op.skillLevel === 1}
    >
      <KeyboardArrowDownSharp fontSize="large" />
    </Button>
  );
  const p1 = (
    <Button
      onClick={() => updateRank(op.skillLevel + 1)}
      disabled={!op.owned || op.skillLevel === [4, 7, 7][op.promotion]}
    >
      <KeyboardArrowUpSharp fontSize="large" />
    </Button>
  );
  const rankButton = (rank: number) => (
    <Button
      onClick={() => updateRank(rank)}
      disabled={!op.owned || op.skillLevel === rank || rank > [4, 7, 7][op.promotion]}
    >
      <Box
        sx={{ gridArea: "1 / 1" }}
        component="img"
        width="2.5rem"
        src={`/img/rank/bg.png`}
        alt={""}
      />
      <Box
        sx={{ gridArea: "1 / 1" }}
        component="img"
        width="2.5rem"
        src={`/img/rank/${rank}.png`}
        alt={`Rank ${rank}`}
      />
    </Button>
  );

  return (
    <Box sx={{
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      gap: "4px",
      "& .MuiButton-root": {
        display: "grid",
        p: 0.5,
        minWidth: 0,
        lineHeight: 0.5,
        color: "#ffffff",
      }
    }}>
      {rankButton(previousSkillLevel)}
      <Box sx={{
        display: "flex",
        flexDirection: "column-reverse",
        gap: "2px",
        "& > .MuiButton-root": {
          display: "grid",
          p: 0,
          height: "min-content",
        }
      }}>
        {m1}
        <Box sx={{ display: "grid", "& > *": { gridArea: "1 / 1", width: "3.75rem" } }}>
          <Box
            component="img"
            src={`/img/rank/bg.png`}
            alt={""}
          />
          {op.owned
            ? <Box
              component="img"
              src={`/img/rank/${op.skillLevel}.png`}
              alt={`Rank ${op.skillLevel}`}
            />
            : <HorizontalRule
              className={!op.owned ? "Mui-disabled" : ""}
              sx={{
                alignSelf: "center",
                width: "100%"
              }}
            />}
        </Box>
        {p1}
      </Box>
      {rankButton(nextSkillLevel)}
    </Box>
  )
})
export default SkillLevel;
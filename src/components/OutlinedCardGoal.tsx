"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import DiscreteSlideMarks from "./DiscreteSliderMarks";

export default function OutlinedCard() {
  return (
    <Box className="mx-4 rounded-md">
      <Card variant="outlined">
        <DiscreteSlideMarks />
      </Card>
    </Box>
  );
}

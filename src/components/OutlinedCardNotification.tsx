"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MinimumDistanceSlider from "./MinimumDistanceSlider";

export default function OutlinedCardNotification() {
  return (
    <Box className="mx-4 rounded-md">
      <Card variant="outlined">
        <CardContent>
          <MinimumDistanceSlider />
        </CardContent>
      </Card>
    </Box>
  );
}

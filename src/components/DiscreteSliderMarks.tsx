"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1000,
    label: '1K',
  },
  {
    value: 5000,
    label: '5K',
  },
  {
    value: 10000,
    label: '10K',
  },
];

function valuetext(value: number) {
  return `${value}steps`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={2000}
        getAriaValueText={valuetext}
        step={100}
        valueLabelDisplay="auto"
        marks={marks}
        min={1000}
        max={10000}
      />
    </Box>
  );
}
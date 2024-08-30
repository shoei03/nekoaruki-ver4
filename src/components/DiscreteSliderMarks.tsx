"use client";

import * as React from 'react';
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
    <div className="w-full px-6">
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
    </div>
  );
}
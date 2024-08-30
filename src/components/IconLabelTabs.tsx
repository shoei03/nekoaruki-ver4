"use client";

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DialpadIcon from '@mui/icons-material/Dialpad';
import CollectionsIcon from '@mui/icons-material/Collections';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<DialpadIcon />} label="GOAL" />
        <Tab icon={<CollectionsIcon />} label="COLLECTIONS" />
        <Tab icon={<NotificationsIcon />} label="NOTIFICATION" />
      </Tabs>
      <div className="mt-4">
      </div>
    </div>
  );
}
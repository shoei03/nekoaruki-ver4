"use client";

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CollectionsIcon from '@mui/icons-material/Collections';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionComponent from '../components/CollectionComponent';
import SettingComponent from '../components/SettingComponent';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<CollectionsIcon />} label="Collections" />
        <Tab icon={<SettingsIcon />} label="Settings" />
      </Tabs>
      <div className="mt-4">
        {value === 0 && <CollectionComponent />}
        {value === 1 && <SettingComponent />}
      </div>
    </div>
  );
}
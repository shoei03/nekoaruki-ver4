"use client";

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import DoNotStepIcon from '@mui/icons-material/DoNotStep';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/navigation'; // App Routerに対応するuseRouter
import { Box } from '@mui/material';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path); // ページ遷移を処理
  };

  return (
    <Box className="fixed bottom-0 w-full">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue); // 状態を更新
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => handleNavigation('/')} // ホームページに遷移
        />
        <BottomNavigationAction
          label="Steps"
          icon={<DoNotStepIcon />}
          onClick={() => handleNavigation('/steps')} // stepsページに遷移
        />
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleIcon />}
          onClick={() => handleNavigation('/profile')} // profileページに遷移
        />
      </BottomNavigation>
    </Box>
  );
}

import { Twitter, YouTube } from '@mui/icons-material';
import { AppBar, Box, Button, SvgIcon, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';

const content = [{
  value: "KQM Discord"
}, {
  value: "TheoryCrafting Library"
}, {
  value: "Team Compendium"
}, {
  value: "Tools"
}, {
  value: "TC Network"
}]

const icons = [{
  svg: <YouTube sx={{ fontSize: 25 }} />
}, {
  svg: <Twitter sx={{ fontSize: 25 }} />
}, {
  svg: <SvgIcon sx={{ fontSize: 25 }} >
    <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z" />
  </SvgIcon>
}, {
  svg: <SvgIcon sx={{ fontSize: 25 }} >
    <path d="M21 10a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z" />
    <path d="M3 4h4v16H3V4Z" />
  </SvgIcon>
},]

export default function Header() {
  const [currTab, setcurrTab] = useState("TheoryCrafting Library")
  return <AppBar
    sx={{
      backgroundColor: "backDark.main",
      borderColor: "lightStroke.main", display: "flex", justifyContent: "center",
      position: "initial"
    }}>

    <Tabs
      value={currTab}
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        "& .MuiTab-root": {
          px: 1,
          flexDirection: "row",
          minWidth: 40,
          minHeight: "auto",
        },
        "& .MuiTab-root:hover": {
          transition: "background-color 0.5s ease",
          backgroundColor: "rgba(255,255,255,0.1)"
        },
        "& .MuiTab-root > .MuiTab-iconWrapper": {
          mb: 0,
          mr: 0.5
        },
      }}
    >
      <Tab value="home" label={<Box component="img" src={logo} sx={{ height: 60, width: "auto" }} />} />
      {content.map(({ value }) => <Tab key={value} value={value} label={<Typography variant='h6'>{value}</Typography>}
        sx={{ textTransform: "none", alignItems: "flex-end" }} />)}
      <Box flexGrow={1} />
      <Box flexGrow={1} display="flex" justifyContent="flex-end" alignItems="flex-end" gap={2} sx={{ pb: 2, pr: 2 }} >
        {icons.map(({ svg }, i) => <Button key={i} variant='contained' color="white" sx={{ p: 1, minWidth: 0 }}>{svg}</Button>)}
      </Box>
    </Tabs>

  </AppBar>
}

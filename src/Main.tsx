import { Twitter, YouTube } from '@mui/icons-material';
import { Box, BoxProps, Button, Card, CardContent, CardHeader, Chip, Container, Divider, Grid, styled, SvgIcon, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import logo from './logo.png';
import new_ayato from "./new_ayato.png";
import new_info from "./new_info.png";
import new_yelan from "./new_yelan.png";
import backbanner from "./backbanner.jpg"
import anemo_icon from "./Elements/UI_TheatreMechanicus_Element_Wind.png"
import geo_icon from "./Elements/UI_TheatreMechanicus_Element_Roach.png"
import electro_icon from "./Elements/UI_TheatreMechanicus_Element_Elect.png"
import pyro_icon from "./Elements/UI_TheatreMechanicus_Element_Fire.png"
import hydro_icon from "./Elements/UI_TheatreMechanicus_Element_Water.png"
import cryo_icon from "./Elements/UI_TheatreMechanicus_Element_Frost.png"

import sword_icon from "./Weapons/icon_sword.png"
import claymore_icon from "./Weapons/icon_claymore.png"
import polearm_icon from "./Weapons/icon_polearm.png"
import bow_icon from "./Weapons/icon_bow.png"
import catalyst_icon from "./Weapons/icon_catalyst.png"

import ayato_icon from "./Characters/KamisatoAyato.png"

const eleIcons = {
  anemo: anemo_icon,
  geo: geo_icon,
  electro: electro_icon,
  pyro: pyro_icon,
  hydro: hydro_icon,
  cryo: cryo_icon
} as const

const weaponIcons = {
  sword: sword_icon,
  claymore: claymore_icon,
  polearm: polearm_icon,
  bow: bow_icon,
  catalyst: catalyst_icon
}

export default function Main() {
  return <Container maxWidth="xl" >
    <Box sx={{ backgroundColor: "backDark.main", borderBottom: 2, borderColor: "lightStroke.main", display: "flex", justifyContent: "center", height: 75 }}>
      <Box component="img" src={logo} sx={{ height: "100%", width: "auto" }} />
      <Box flexGrow={1} display="flex" justifyContent="flex-end" alignItems="flex-end" gap={2} sx={{ pb: 2, pr: 2 }} >
        <Button variant='contained' color="kqmLight" sx={{ p: 1, minWidth: 0 }}><YouTube sx={{ fontSize: 25 }} /></Button>
        <Button variant='contained' color="kqmLight" sx={{ p: 1, minWidth: 0 }}><Twitter sx={{ fontSize: 25 }} /></Button>
        <Button variant='contained' color="kqmLight" sx={{ p: 1, minWidth: 0 }}><SvgIcon sx={{ fontSize: 25 }} >
          <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z" />
        </SvgIcon></Button>
        <Button variant='contained' color="kqmLight" sx={{ p: 1, minWidth: 0 }}><SvgIcon sx={{ fontSize: 25 }} >
          <path d="M21 10a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z" />
          <path d="M3 4h4v16H3V4Z" />
        </SvgIcon></Button>
      </Box>
    </Box>

    <Box sx={{ minHeight: 100, backgroundColor: "backDark.dark", padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <KQMCard sx={{ height: 400, padding: 2 }}>
          </KQMCard>
          <KQMCard sx={{ height: 400, padding: 2 }}>
          </KQMCard>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <KQMCard>
            <CardHeader sx={{ backgroundColor: "backLight.main" }} title={<Typography variant="h6" component="span" sx={(t) => ({ borderBottom: `4px solid ${t.palette.kqmLight.light}`, pb: 1 })} > Keqing Mains</Typography>} />
            <Divider />
            <CardContent>
              <Typography>We are the best community dedicated to theorycrafting and exploring the intricacies of <i>Genshin Impact</i>. We’ve become the largest and most comprehensive source of information for the game.</Typography>
            </CardContent>
          </KQMCard>
          <KQMCard>
            <CardHeader sx={{ backgroundColor: "backLight.main" }} title={<Typography variant="h6" component="span" sx={(t) => ({ borderBottom: `4px solid ${t.palette.kqmLight.light}`, pb: 1 })}> What's New?</Typography>} />
            <Divider />
            <CardContent>
              <Box display="flex" gap={2}>
                <Box component="img" src={new_ayato} />
                <Typography variant="h5">Ayato Guide</Typography>
                <Chip label="NEW" color="error" />
              </Box>
              <Box display="flex" gap={2}>
                <Box component="img" src={new_info} />
                <Typography variant="h5">Ayato Infographic</Typography>
                <Chip label="UPDATED" color="warning" />
              </Box>
              <Box display="flex" gap={2}>
                <Box component="img" src={new_yelan} />
                <Typography variant="h5">Yelan Guide</Typography>
                <Chip label="NEW" color="error" />
              </Box>
            </CardContent>
          </KQMCard>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <KQMCard sx={{ height: 100, padding: 2 }}>

          </KQMCard>
          <KQMCard sx={{ height: 100, padding: 2 }}>
          </KQMCard>
          <KQMCard sx={{ height: 400, padding: 2 }}>
          </KQMCard>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backbanner})`, backgroundSize: "cover", backgroundPosition: "50% 25%", height: 300, display: "flex", alignItems: "flex-end" }}>
      <Box sx={{ opacity: 1, p: 2 }} display="flex" gap={2}>
        <Typography variant="h6" component="span" sx={(t) => ({ borderBottom: `4px solid ${t.palette.kqmLight.light}`, pb: 1 })} >Guides</Typography>
        <Typography variant="h6" component="span" sx={(t) => ({ borderBottom: `4px solid ${t.palette.kqmLight.light}`, pb: 1 })} >Infographics</Typography>
      </Box>
    </Box>
    <Box sx={{ minHeight: 100, backgroundColor: "backDark.dark", padding: 2 }}>
      <Box display="flex" justifyContent="space-around">
        <ToggleButtonGroup value="hydro">
          {Object.entries(eleIcons).map(([e, icon]) => <ToggleButton key={e} value={e} sx={{ p: 0 }}>
            <Box component="img" src={icon} />
          </ToggleButton>)}
        </ToggleButtonGroup>
        <ToggleButtonGroup value="sword">
          {Object.entries(weaponIcons).map(([e, icon]) => <ToggleButton key={e} value={e} sx={{ p: 0 }}>
            <Box component="img" src={icon} sx={{ height: 64, width: 64 }} />
          </ToggleButton>)}

        </ToggleButtonGroup>
      </Box>
      <Grid container spacing={2} sx={{ mt: 2 }} >
        {[...Array(14).keys()].map(i => <Grid item xs={4} key={i}>
          <KQMCard sx={{ display: "flex" }}>
            <Box component="img" src={ayato_icon} sx={{ width: 128, height: 128, backgroundColor: "rgba(50,50,200,0.7)" }} />
            <CardContent sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
              <Typography variant='subtitle1'><strong>Something something Guide something really long title is really long</strong></Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <Typography variant="subtitle2"><strong>Some Writer#1234</strong></Typography>
                <Chip label="2.7" />
              </Box>
            </CardContent>
          </KQMCard>
        </Grid>)}
      </Grid>
    </Box>
  </Container >
}

interface KQMCardProps extends BoxProps {
  light?: boolean;
}
const KQMCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "light"
})<KQMCardProps>(({ theme, light = false }) => {
  console.log(light)
  return ({
    borderRadius: theme.spacing(2),
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.palette.lightStroke.main,
    backgroundColor: light ? theme.palette.backLight.main : theme.palette.backDark.main
  })
})

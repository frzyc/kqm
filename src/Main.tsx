import { Box, BoxProps, Card, CardContent, CardHeader, Chip, Container, Divider, Grid, styled, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import backbanner from "./backbanner.jpg";
import ayato_icon from "./Characters/KamisatoAyato.png";
import electro_icon from "./Elements/UI_TheatreMechanicus_Element_Elect.png";
import pyro_icon from "./Elements/UI_TheatreMechanicus_Element_Fire.png";
import cryo_icon from "./Elements/UI_TheatreMechanicus_Element_Frost.png";
import geo_icon from "./Elements/UI_TheatreMechanicus_Element_Roach.png";
import hydro_icon from "./Elements/UI_TheatreMechanicus_Element_Water.png";
import anemo_icon from "./Elements/UI_TheatreMechanicus_Element_Wind.png";
import new_ayato from "./new_ayato.png";
import new_info from "./new_info.png";
import new_yelan from "./new_yelan.png";
import bow_icon from "./Weapons/icon_bow.png";
import catalyst_icon from "./Weapons/icon_catalyst.png";
import claymore_icon from "./Weapons/icon_claymore.png";
import polearm_icon from "./Weapons/icon_polearm.png";
import sword_icon from "./Weapons/icon_sword.png";



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

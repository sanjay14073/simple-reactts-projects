import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, Link, Typography, Divider } from "@mui/material";
import { Phone, Info, Web } from "@mui/icons-material";

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: '22.5%',
        backgroundColor: '#008080',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        visibility: 'visible',
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        padding: '24px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h5" color="#fff" sx={{ marginBottom: '16px', fontWeight: 600 }}>
        COVID-19 Information
      </Typography>

      <Typography variant="body1" color="#fff" sx={{ marginBottom: '16px', lineHeight: '1.6' }}>
        COVID-19 is an infectious disease caused by the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). 
        It was first identified in December 2019 in Wuhan, China. 
        The World Health Organization (WHO) declared the outbreak a Public Health Emergency of International Concern 
        on 30 January 2020, and a pandemic on 11 March 2020.
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <Info sx={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText>
            <Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" rel="noopener" color="#fff" underline="hover">
              Learn More about COVID-19
            </Link>
          </ListItemText>
        </ListItem>
      </List>

      <Divider sx={{ backgroundColor: '#fff', marginY: '16px' }} />

      <Typography variant="body2" color="#fff" sx={{ marginBottom: '8px', fontWeight: 600 }}>
        Helpline Numbers:
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <Phone sx={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText>
            <Link href="tel:112" color="#fff">
              Emergency Helpline: 112
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <Web sx={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText>
            <Link href="https://main.mohfw.gov.in/" color="#fff" target="_blank">
              Govt of India Website
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;



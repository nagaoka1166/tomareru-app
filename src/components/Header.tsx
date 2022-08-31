import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useData } from '../hooks/useData';

const Header = ({ setEditOption }: { setEditOption: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const setEditOptionClick = () => {
    setEditOption(true);
  };
  const { fetchCurrentLocation } = useData();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rakuten トマレル
          </Typography>
          <IconButton size="large" color="inherit" aria-label="reload" sx={{ mr: 2 }} onClick={fetchCurrentLocation}>
            <RestartAltIcon />
          </IconButton>
          <IconButton size="large" color="inherit" aria-label="editOption" sx={{ mr: 2 }} onClick={setEditOptionClick}>
            <SettingsSharpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

interface Props {
  darkMode: boolean;
  toggleTheme: () => void;
}

function Header({darkMode, toggleTheme}: Props) {

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">
          LAVORNIA STORE
        </Typography>
        <Switch checked={darkMode} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
import * as React from 'react';
import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link href='/' passHref>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  EREMPMLT
              </Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
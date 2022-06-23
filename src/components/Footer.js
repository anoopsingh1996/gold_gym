import React from 'react'
import { Box, Stack, Typography} from '@mui/material';
import Logo from '../assets/assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80x" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px"/>
         <Typography variant='h5' pb="40px" mt="20px">
           Made with ❤️  <a href='https://anoopsingh1996.github.io/' style={{textDecoration: 'none', color:'#3A1212'}} target="_blank" rel="noopener noreferrer">Anoop Singh</a>
         </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
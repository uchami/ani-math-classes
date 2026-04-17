import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Logo } from '@/components/logo'
import { Navigation, AuthNavigation } from '@/components/navigation'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'

const Header: FC = () => {
  return (
    <Box sx={{ display: {xs: 'none', md: 'block' }, backgroundColor: 'background.paper', position: "sticky", top: 0, zIndex: 99 }}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Navigation />
        </Box>
      </Container>
    </Box>
  )
}

export default Header

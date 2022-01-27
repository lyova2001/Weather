import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  AppBar,
  Toolbar,
  BottomNavigationAction,
  BottomNavigation,
} from '@mui/material'

export default function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <AppBar sx={{ background: '#333' }} position='static'>
      <Toolbar>
        <BottomNavigation
          showLabels
          value={pathname}
          onChange={(event, newValue) => {
            navigate(newValue)
          }}
          sx={{ background: 'transparent' }}
        >
          <BottomNavigationAction value='/' label='Home' />
          <BottomNavigationAction value='/day' label='Day' />
          <BottomNavigationAction value='/week' label='Week' />
          <BottomNavigationAction value='/month' label='Month' />
        </BottomNavigation>
      </Toolbar>
    </AppBar>
  )
}

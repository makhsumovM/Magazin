import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import { IconButton, Menu, MenuItem, TextField } from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { AccountCircle } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Layout = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className='navbar flex bg-[#1C2536] items-center justify-between p-[20px]'>
        <div className='flex items-center gap-[40px]'>
          <div className='flex items-center gap-[20px]'>
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </div>
          <div>
            <TextField label="search" size='small'/>
          </div>
        </div>
        <div className=''>
              <IconButton
                size=""
                aria-controls="menu-appbar"
                color='inherit'
                onClick={handleMenu}
                
              >
                <AccountCircleIcon  fontSize='large' color='' sx={{color:"white"}}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
      </div>
      <div className='flex'>
      <div className='w-[20%] min-h-[88vh]  bg-[#1C2536]'>
        misol
      </div>
      <div>
        <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default Layout
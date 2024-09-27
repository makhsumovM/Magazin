import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import { IconButton, Menu, MenuItem, TextField } from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { AccountCircle } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

const Layout = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState('/layout');

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
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
            <TextField label="search" size='small' />
          </div>
        </div>
        <div className=''>
          <IconButton
            size=""
            aria-controls="menu-appbar"
            color='inherit'
            onClick={handleMenu}
          >
            <AccountCircleIcon fontSize='large' sx={{ color: "white" }} />
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
        <div className='w-[18%] min-h-[88vh] bg-[#1C2536]'>
          <div className='py-[50px] flex flex-col gap-[20px]'>
            <Link to={'/layout'} onClick={() => handleMenuClick('/layout')}>
              <div className=''>
                <p className={`p-[10px] w-[90%] m-auto rounded-lg flex items-center gap-[10px] transition-all duration-300 transform ${activeMenu === '/layout' ? 'bg-white text-black scale-105' : 'text-white hover:bg-gray-700 hover:scale-105'}`}>
                  <span><HomeOutlinedIcon fontSize='large' /></span> Dashboard
                </p>
              </div>
            </Link>
            <Link to={'orders'} onClick={() => handleMenuClick('orders')}>
              <div className=''>
                <p className={`p-[10px] w-[90%] m-auto rounded-lg flex items-center gap-[10px] transition-all duration-300 transform ${activeMenu === 'orders' ? 'bg-white text-black scale-105' : 'text-white hover:bg-gray-700 hover:scale-105'}`}>
                  <span><ListOutlinedIcon fontSize='large' /></span> Orders
                </p>
              </div>
            </Link>
            <Link to={'products'} onClick={() => handleMenuClick('products')}>
              <div className=''>
                <p className={`p-[10px] w-[90%] m-auto rounded-lg flex items-center gap-[10px] transition-all duration-300 transform ${activeMenu === 'products' ? 'bg-white text-black scale-105' : 'text-white hover:bg-gray-700 hover:scale-105'}`}>
                  <span><LocalOfferOutlinedIcon fontSize='large' /></span> Products
                </p>
              </div>
            </Link>
            <Link to={'other'} onClick={() => handleMenuClick('other')}>
              <div className=''>
                <p className={`p-[10px] w-[90%] m-auto rounded-lg flex items-center gap-[10px] transition-all duration-300 transform ${activeMenu === 'other' ? 'bg-white text-black scale-105' : 'text-white hover:bg-gray-700 hover:scale-105'}`}>
                  <span><FolderOpenOutlinedIcon fontSize='large' /></span> Other
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className='w-[82%]'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

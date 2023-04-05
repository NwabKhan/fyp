import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import css from "../../css/header.module.css";
import { useUserAuthContext } from "../../context/UserAuthContet";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
const Header = () => {
  const { userName, userEmail, userDP, logOut, user } = useUserAuthContext();

  const [activeUser, setActiveUser] = useState(true) //used for the profile based on user is active or not
  useEffect(() => {
    user ? setActiveUser(false) : setActiveUser(true)
  }, [user]);

  const navigate = useNavigate()
  const settings = ["Profile", "Logout"];
  
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSettingsClick = (e)=>{
    const clickedTab = e.target.innerHTML ;
    switch(clickedTab){
      case "Profile" :
        navigate("/about")
        break
      case "Logout" :
        logOut();
        break
      default:
        console.log("Defalut goes here")
    }
    setAnchorElUser(null);
  }
  return (
    <div className={`${css.header}`} style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
      <Box>
        <Tooltip title="Users">
          <span>
          <IconButton onClick={handleOpenUserMenu} disabled = {activeUser}>
            <Avatar alt={userName} src={userDP} />
          </IconButton>
          </span>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={(e)=>handleSettingsClick(e)}>
              <Typography>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Navbar />
    </div>
  );
};

export default Header;

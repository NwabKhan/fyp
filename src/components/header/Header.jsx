import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import css from "../../css/header.module.css";
import { useUserAuthContext } from "../../context/UserAuthContet";
import images from '../../resources/index'
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
  const { userName, userDP, logOut, user } = useUserAuthContext();

  const [isScrolled, setIsScrolled] = useState(false); //use to change bg f header on scroll

  const [activeUser, setActiveUser] = useState(true); //used for the profile based on user is active or not

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    user ? setActiveUser(false) : setActiveUser(true);
  }, [user]);

  const navigate = useNavigate();
  const settings = ["Profile", "Logout"];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSettingsClick = (e) => {
    const clickedTab = e.target.innerHTML;
    switch (clickedTab) {
      case "Profile":
        navigate("/about");
        break;
      case "Logout":
        logOut();
        break;
      default:
        console.log("Defalut goes here");
    }
    setAnchorElUser(null);
  };
  return (
    <div className={`${css.header} ${isScrolled ? css.scrolled : ""}`}>
      <Box>
        <Tooltip title="Users">
          <span>
            <IconButton onClick={handleOpenUserMenu} disabled={activeUser}>
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
            <MenuItem key={setting} onClick={(e) => handleSettingsClick(e)}>
              <Typography>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <img style={{width: '200px', height: 'auto', cursor: 'pointer', padding: '3rem', color: 'white !important'}} src={images.icons.logo1} alt="LPOS" />
      <Navbar isScrolled = {isScrolled} />
    </div>
  );
};

export default Header;

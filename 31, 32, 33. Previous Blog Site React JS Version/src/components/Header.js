import { useState } from "react";
import "../css/header.css";
import "../index.css";
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Menu,
  MenuItem,
  Tooltip,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { AccountCircle } from "@material-ui/icons";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  const [anchorElOfDrop, setAnchorElOfDrop] = useState(null);
  const [anchorElOfNotification, setAnchorElOfNotification] = useState(null);

  const handleClickOfDrop = (event) => {
    setAnchorElOfDrop(event.currentTarget);
  };

  const handleCloseOfDrop = () => {
    setAnchorElOfDrop(null);
  };

  const handleClickOfNotification = (event) => {
    setAnchorElOfNotification(event.currentTarget);
  };

  const handleCloseOfNotification = () => {
    setAnchorElOfNotification(null);
  };

  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <nav className="desktop-nav" id="nav-desktop">
        <div className="nav-left">
          <p>CrystalStocks</p>
        </div>
        <div className="nav-center">
          <form action="">
            <input type="text" placeholder="Search" name="search" />
            <Button type="submit" className="search-icon">
              <SearchIcon />
            </Button>
          </form>
        </div>
        <div className="nav-right">
          <Avatar className="avatar">
            <AccountCircle />
          </Avatar>
          <p className="nav-person-info">Thomas St</p>
          <Tooltip title="User Options">
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClickOfDrop}
              className="nav-drop"
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorElOfDrop}
            keepMounted
            open={Boolean(anchorElOfDrop)}
            onClose={handleCloseOfDrop}
          >
            <MenuItem onClick={handleCloseOfDrop}>Profile</MenuItem>
            <MenuItem onClick={handleCloseOfDrop}>My account</MenuItem>
            <MenuItem onClick={handleCloseOfDrop}>Logout</MenuItem>
          </Menu>

          <Tooltip title="Notifications">
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClickOfNotification}
            >
              <NotificationsIcon />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorElOfNotification}
            keepMounted
            open={Boolean(anchorElOfNotification)}
            onClose={handleCloseOfNotification}
          >
            <div className="notifications nothing">
              <p>No new notifications</p>
            </div>
          </Menu>

          <i className="fas fa-bell notification"></i>
        </div>
      </nav>

      <BottomNavigation
        value={value}
        onChange={handleChange}
        className="mobile-nav show-in-mobile"
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<NotificationsIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<NotificationsIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<NotificationsIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<NotificationsIcon />}
        />
      </BottomNavigation>
    </>
  );
};

export default Header;

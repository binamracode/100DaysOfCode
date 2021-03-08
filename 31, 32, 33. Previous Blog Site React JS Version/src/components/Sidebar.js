import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import ComputerIcon from "@material-ui/icons/Computer";
import FlightIcon from "@material-ui/icons/Flight";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import "../css/Sidebar.css";
import { useState } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";

const Sidebar = (props) => {
  const localMode = localStorage.getItem("mode");

  const [mode, setMode] = useState(localMode ? localMode : "auto");

  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${mode}`);

  const handleChange = (event) => {
    const mode = event.target.value;
    setMode(mode);
    localStorage.setItem("mode", mode);
    props.changeTheme(mode === "auto" ? "dark" : mode);
  };

  return (
    <div className="hide-in-mobile">
      <aside id="sidebar">
        <p className="title hide-in-900">Menu</p>
        <ul>
          <li className="active">
            <a href="/#">
              <i></i>
              <HomeIcon className="aside-icon hide-in-1200" />
              <p className="aside-icon-content hide-in-900">Discover</p>
            </a>
          </li>

          <li>
            <a href="/#">
              <WhatshotIcon className="fas fa-fire aside-icon hide-in-1200" />
              <p className="aside-icon-content hide-in-900">Trending</p>
            </a>
          </li>

          <li>
            <a href="/#">
              <InsertEmoticonIcon className="aside-icon hide-in-1200"></InsertEmoticonIcon>
              <p className="aside-icon-content hide-in-900">Memes</p>
            </a>
          </li>

          <li>
            <a href="/#">
              <EmojiObjectsIcon className="aside-icon hide-in-1200"></EmojiObjectsIcon>
              <p className="aside-icon-content hide-in-900">Facts</p>
            </a>
          </li>
        </ul>

        <div className="aside-separator"></div>
        <p className="title hide-in-900">Category</p>

        <ul>
          <li>
            <a href="/#">
              <InsertEmoticonIcon className="aside-icon hide-in-1200"></InsertEmoticonIcon>
              <p className="aside-icon-content hide-in-900">Entertainment</p>
            </a>
          </li>

          <li>
            <a href="/#">
              <FlightIcon className="aside-icon hide-in-1200"></FlightIcon>
              <p className="aside-icon-content hide-in-900">Travel</p>
            </a>
          </li>

          <li>
            <a href="/#">
              <ComputerIcon className="aside-icon hide-in-1200"></ComputerIcon>
              <p className="aside-icon-content hide-in-900">Programming</p>
            </a>
          </li>

          <li>
            <a href="/#">
              <PhoneAndroidIcon className="aside-icon hide-in-1200"></PhoneAndroidIcon>
              <p className="aside-icon-content hide-in-900">Mobile & Gadgets</p>
            </a>
          </li>
        </ul>

        <div className="aside-separator"></div>
        <div className="theme-mode">
          <FormControl variant="outlined" className="theme_select">
            <Select value={mode} onChange={handleChange}>
              <MenuItem value="auto">Auto</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div id="aside-empty"></div>
      </aside>
    </div>
  );
};

export default Sidebar;

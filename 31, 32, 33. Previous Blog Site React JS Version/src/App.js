import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TopPosts from "./components/TopPosts/TopPosts";
import { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import PostBlocks from "./components/PostBlocks/PostBlocks";

function App() {
  const localMode = localStorage.getItem("mode");
  const [theme, setTheme] = useState(localMode === "light" ? "light" : "dark");

  const darkTheme = createMuiTheme({
    palette: {
      type: theme,
    },
  });

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Header />
        <main>
          <Sidebar changeTheme={changeTheme} />
          <div className="container">
            <div className="content">
              <p className="page-title">Discover</p>
              <TopPosts />
              <PostBlocks />
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

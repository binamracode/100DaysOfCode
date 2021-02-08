import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Gallery />
      </div>
    </ThemeProvider>
  );
}

export default App;

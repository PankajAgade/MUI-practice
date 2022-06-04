import "./App.css";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

//* Imports Component
import Login from "./Screens/Login/Login";

const theme = createTheme({
  palette: {
    primary: {
      light: '#5BE584',
      main: '#00AB55',
      dark: '#007B55',
      contrastText: '#fff',
    },
    secondary: {
      light: '#84A9FF',
      main: '#3366FF',
      dark: '#1939B7',
      contrastText: '#000',
    },
  },
});


function App() {

  const AppRouting = () => {
    const elementRoute = useRoutes([
      {
        path: "/",
        element: <Login />
      },
    ]);
    return elementRoute;
  }

  

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppRouting />
      </ThemeProvider>
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { styled, ThemeProvider } from "styled-components";

import Home from "./Home";
import Navbar from "./components/Navbar";
import Meeting from "./Meeting";
import { UserProvider } from "./components/UserContext";
import Achievements from "./Achievements";
import Reps from "./Reps";
import Leaderboard from "./Leadeboard";
import Profile from "./Profile";

import { Palette } from "./styles";
import Archive from "./Archive";
import axios from "axios";

// change this if you want to change background
document.body.style.backgroundColor = "#aaaa99";
axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={Palette}>
        <UserProvider>
          <Container>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/meeting/:id" element={<Meeting />} />
              <Route path="/user/:id" element={<Profile />} />
              <Route path="/reps" element={<Reps />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/archive" element={<Archive/>} />
            </Routes>
            <Navbar />
          </Container>
        </UserProvider>
      </ThemeProvider>
    </Router>
  );
};

const Container = styled.div`
    height: calc(100vh - 60px);
    // width: 100vw;
`;

export default App;

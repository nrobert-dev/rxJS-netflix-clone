import React from 'react';
import Login from "./pages/Login";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import BrowsePage from "./pages/BrowsePage";
import UserPage from "./pages/UserPage";
import WatchPage from "./pages/WatchPage";

/*
    To implement, double click to play videos and smooth transition
 */

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/browse" element={<BrowsePage/>} />
              <Route path="/user" element={<UserPage/>} />
              <Route path="/watch" element={<WatchPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

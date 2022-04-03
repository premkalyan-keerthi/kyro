import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Login } from "./Components/Login/Login";
import { Homepage } from "./Components/Hompage/Homepage";

import "./App.css";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/tv-series" element={<Homepage />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Vehicles } from "./pages/vehicles/vehicles";
import { Customers } from "./pages/customers/customers";
import { Rentals } from "./pages/rentals/rentals";
import { Report } from "./pages/report/report";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

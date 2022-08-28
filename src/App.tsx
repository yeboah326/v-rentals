import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddCustomer } from "./pages/add_customer/add_customer";
import { AddRental } from "./pages/add_rental/add_rental";
import { AddVehicle } from "./pages/add_vehicle/add_vehicle";
import { Customers } from "./pages/customers/customers";
import { Dashboard } from "./pages/dashboard/dashboard";
import { EditCustomer } from "./pages/edit_customer/edit_customer";
import { EditRental } from "./pages/edit_rental/edit_rental";
import { EditVehicle } from "./pages/edit_vehicle/edit_vehicle";
import Login from "./pages/login/login";
import { Rentals } from "./pages/rentals/rentals";
import { Report } from "./pages/report/report";
import Signup from "./pages/signup/signup";
import { Vehicles } from "./pages/vehicles/vehicles";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Providers
import { AuthProvider } from "./services/auth.service";
import { CustomerProvider } from "./services/customers.service";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            {/* Auth */}

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Vehicles */}
            <Route
              path="/vehicles"
              element={
                  <Vehicles />
              }
            />
            <Route
              path="/vehicles/add"
              element={
                  <AddVehicle />
              }
            />
            <Route
              path="/vehicles/edit"
              element={
                  <EditVehicle />
              }
            />

            {/* Customers */}
            <Route
              path="/customers"
              element={
                <CustomerProvider>
                  <Customers />
                </CustomerProvider>
              }
            />
            <Route
              path="/customers/add"
              element={
                <CustomerProvider>
                  <AddCustomer />
                </CustomerProvider>
              }
            />
            <Route
              path="/customers/edit"
              element={
                <CustomerProvider>
                  <EditCustomer />
                </CustomerProvider>
              }
            />

            {/* Rentals */}
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/rentals/add" element={<AddRental />} />
            <Route path="/rentals/edit" element={<EditRental />} />

            <Route path="/report" element={<Report />} />
          </Routes>
        </AuthProvider>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;

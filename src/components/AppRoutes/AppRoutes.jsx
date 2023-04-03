import React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "../../Pages/customers/Customers";
import Dashboard from "../../Pages/dashboard/Dashboard";
import Inventorys from "../../Pages/inventorys/Inventorys";
import Orders from "../../Pages/orders/Orders";
import Settings from "../../Pages/settings/Settings";
import Shipping from "../../Pages/shipping/Shipping";
import AppLayout from "../AppLayout/AppLayout";


const AppRoutes = () => {
  return (
    <div className="AppRoutes">
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/inventory" element={<Inventorys/>} />
          <Route path="/customers" element={<Customers/>} />
          <Route path="/shipping" element={<Shipping/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </AppLayout>
    </div>
  );
};

export default AppRoutes;

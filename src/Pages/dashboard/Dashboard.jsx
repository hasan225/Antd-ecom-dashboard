import { Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import DashboardCards from "../../components/DashboardCards/DashboardCards";

import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";
import { BsFillBasket2Fill } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import RecentOrders from "../../components/RecentOrders/RecentOrders";
import DashboardChart from "../../components/DashboardChart/DashboardChart";
import { getInventory, getOrders, getSellRevenue, getUsers } from "../../FetchApi";

const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  
  useEffect(()=>{
    getOrders().then(res=>{
      setOrders(res.total)
      setRevenue(res.discountedTotal)
    })
    getInventory().then(res=>{
      setInventory(res.total)
    })
    getUsers().then(res=>{
      setCustomers(res.total)
    })
  })
  return (
    <div className="Dashboard">
      <Typography.Title>Dashboard</Typography.Title>
      <Space direction="vertical">
        <Space direction="horizontal">
          <DashboardCards
            title="Orders"
            value={orders}
            Icons={BsFillBasket2Fill}
            iconCls="bg-red-500 text-white text-4xl p-2 rounded-full"
          />
          <DashboardCards
            title="Inventory"
            value={inventory}
            Icons={MdOutlineInventory2}
            iconCls="bg-emerald-500 text-white text-4xl p-2 rounded-full"
          />
          <DashboardCards
            title="Customers"
            value={customers}
            Icons={HiOutlineUsers}
            iconCls="bg-indigo-500 text-white text-4xl p-2 rounded-full"
          />
          <DashboardCards
            title="Revenue"
            value={`$${revenue}`}
            Icons={AiOutlineDollar}
            iconCls="bg-sky-500 text-white text-4xl p-2 rounded-full"
          />
        </Space>
        <Space>
          <RecentOrders />
          <DashboardChart />
        </Space>
      </Space>
    </div>
  );
};

export default Dashboard;

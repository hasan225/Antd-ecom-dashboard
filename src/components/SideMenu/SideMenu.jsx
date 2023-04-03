import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";
import { BsFillBasket2Fill, BsTruck } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedKeys, setSelectedKeys] = useState();
  useEffect(() => {
    setSelectedKeys(location.pathname);
  }, [location]);

  return (
    <div className="SideMenu h-full" >
      <Menu
        onClick={(value) => {
          navigate(value.key);
        }}
        className="h-full"
        defaultSelectedKeys={1}
        // defaultOpenKeys={"dashboard"}
        selectedKeys={[selectedKeys]}
        // mode="inline"
        // theme="dark"
        // inlineCollapsed={"collapsed"}

        items={[
          { label: "Dashboard", key: "/", icon: <AiOutlineDashboard /> },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <MdOutlineInventory2 />,
          },
          { label: "Orders", key: "/orders", icon: <BsFillBasket2Fill /> },
          { label: "Customers", key: "/customers", icon: <HiOutlineUsers /> },
          { label: "Shipping", key: "/shipping", icon: <BsTruck /> },
          { label: "Settings", key: "/settings", icon: <AiOutlineSetting /> },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;

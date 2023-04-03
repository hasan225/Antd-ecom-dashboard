import { Card, Space, Statistic } from "antd";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const DashboardCards = ({ title, value, Icons, iconCls }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {Icons && <Icons className={iconCls} />}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

export default DashboardCards;

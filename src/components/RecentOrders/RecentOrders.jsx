import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getOrders } from "../../FetchApi";


const RecentOrders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);
  return (
    <div className="recentOrders mt-6">
      <Typography.Title level={3}>Recent Orders</Typography.Title>
      <Table loading={loading} rowKey="id"
        dataSource={dataSource}
        pagination={false}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Discounted Price",
            dataIndex: "discountedPrice",
          },
        ]}
      ></Table>
    </div>
  );
};

export default RecentOrders;

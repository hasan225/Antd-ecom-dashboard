import { Avatar, Rate, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getOrders } from "../../FetchApi";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => setDataSource(res.products));
    setLoading(false);
  }, []);
  return (
    <div className="">
      <Typography.Title level={2} className="pb-4">
        Orders
      </Typography.Title>
      <Table
        dataSource={dataSource}
        rowKey="id"
        loading={loading}
        pagination={{
          pageSize: 6,
        }}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
            ellipsis: true,
          },

          {
            title: "Price",
            dataIndex: "price",
            ellipsis: true,
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: "Discounted Price",
            dataIndex: "discountedPrice",
            ellipsis: true,
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
            ellipsis: true,
          },
          {
            title: "Total",
            dataIndex: "total",
            ellipsis: true,
          },
        ]}
      ></Table>
    </div>
  );
};

export default Orders;

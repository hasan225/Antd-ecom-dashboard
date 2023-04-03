import { Avatar, Rate, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getInventory } from "../../FetchApi";

const Inventorys = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => setDataSource(res.products));
    setLoading(false)
  }, []);
  return (
    <div className="">
      <Typography.Title level={2} className="pb-4">
        Inventorys
      </Typography.Title>
      <Table
        dataSource={dataSource}
        rowKey="id"
        loading={loading}
        pagination={{
          pageSize:6,
        }}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            ellipsis: true,
            render: (data) => {
              return <Avatar src={data} />;
            },
          },
          {
            title: "Title",
            dataIndex: "title",
            ellipsis: true,
          },

          {
            title: "Price",
            dataIndex: "price",
            ellipsis: true,
            render:(value)=>{
              return <span>${value}</span>
            }
          },
          {
            title: "Rating",
            dataIndex: "rating",
            ellipsis: true,
            render:(value)=>{
              return <Rate value={value} allowHalf disabled/>
            }
          },
          {
            title: "Stock",
            dataIndex: "stock",
            ellipsis: true,
          },

          {
            title: "Brand",
            dataIndex: "brand",
            ellipsis: true,
          },
          {
            title: "Category",
            dataIndex: "category",
            ellipsis: true,
            
          },
        ]}
      ></Table>
    </div>
  );
};

export default Inventorys;

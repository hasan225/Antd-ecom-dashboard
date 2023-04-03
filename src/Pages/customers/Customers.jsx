import { Typography, Table, Image, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../FetchApi";

const Customers = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUsers().then((res) => {
      setDataSource(res.users);
    });
    setLoading(false);
  }, []);
  return (
    <div>
      <Typography.Title>Customers</Typography.Title>
      <Table
        rowKey="id"
        loading={loading}
        dataSource={dataSource}
        pagination={{pageSize:6}}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            ellipsis:true,
            render: (data) => {
              return <Avatar src={data} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
            ellipsis:true,
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
            ellipsis:true,
          },
          {
            title: "Email ",
            dataIndex: "email",
            ellipsis:true,
          },
          {
            title: "Phone ",
            dataIndex: "phone",
            ellipsis:true,
          },
          {
            title: "Address ",
            dataIndex: "address",
            ellipsis:true,
            render: (data) => {
              return (
                <span>
                  {data.address}, {data.city}
                </span>
              );
            },
          },
        ]}
      ></Table>
    </div>
  );
};

export default Customers;

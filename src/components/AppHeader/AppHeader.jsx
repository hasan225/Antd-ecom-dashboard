import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import {
  AiFillBehanceCircle,
  AiOutlineBell,
  AiOutlineMail,
} from "react-icons/ai";
import { getMessages, getOrders } from "../../FetchApi";

const AppHeader = () => {
  const [messages, setMessages] = useState([]);
  const [orders, setOrders] = useState([]);
  const [mesDrawerOpen, setMesDrawerOpen] = useState(false);
  const [notiDrawerOpen, setNotiDrawerOpen] = useState(false);
  console.log(messages);

  useEffect(() => {
    getMessages().then((res) => setMessages(res.comments));
    getOrders().then((res) => setOrders(res.products));
  }, []);
  return (
    <div className="AppHeader h-16 flexCenter justify-between px-8 pl-3 py-4 border-0 border-b-[1px] border-solid border-gray-200">
      <Image
        className="!w-12 !h-12 object-cover rounded-full"
        src="https://img1.ak.crunchyroll.com/i/spire2/e64be766aa2a3ce3811fc5a31454a0d71663339986_main.jpg"
      />
      <Typography.Title>Anya Dashboard</Typography.Title>
      <Space>
        <Badge count={messages.length} dot color="#42b200">
          <AiOutlineMail
            className="text-2xl text-emerald-600"
            onClick={() => {
              setMesDrawerOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <AiOutlineBell
            className="text-2xl text-green-600"
            onClick={() => {
              setNotiDrawerOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={mesDrawerOpen}
        onClose={() => setMesDrawerOpen(false)}
      >
        <List
          dataSource={messages}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notiDrawerOpen}
        onClose={() => setNotiDrawerOpen(false)}
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            console.log(item);
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
};

export default AppHeader;

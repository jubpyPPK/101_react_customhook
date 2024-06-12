import React, { useState } from "react";
import AddUsers from "./AddUsers";
import { InputState, User } from "../types/types";
import MyTable from "../components/MyTable";
import AddOrders from "./AddOrders";

const HomePage = () => {
  const [users, setUsers] = useState<InputState[]>([]);
  const [orders, setOrders] = useState<InputState[]>([]);

  return (
    <div>
      <h1>HomePage</h1>
      <AddUsers formData={users} setFormData={setUsers} />
      <AddOrders formData={orders} setFormData={setOrders} />
      <MyTable users={users} orders={orders} />
    </div>
  );
};

export default HomePage;

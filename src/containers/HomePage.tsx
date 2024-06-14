import React, { useState } from "react";
import { InputState, User } from "../types/types";
import MyTable from "../components/MyTable";
import AddMember from "./AddMember";
import AddOrder from "./AddOrder";

const HomePage = () => {
  const [members, setMembers] = useState<InputState[]>([]);
  const [orders, setOrders] = useState<InputState[]>([]);

  const addUserHandler = (value: InputState) => {
    console.log(value);
    setMembers([...members, value]);
  };

  return (
    <div>
      <h1>HomePage</h1>
      <AddMember onSubmit={addUserHandler} />
      <AddOrder members={members} />
      <MyTable members={members} orders={orders} />
    </div>
  );
};

export default HomePage;

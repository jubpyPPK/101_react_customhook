import React from "react";
import { InputState, User } from "../types/types";

interface MyTableProps {
  members: InputState[];
  orders?: InputState[];
  children?: React.ReactNode;
}

const MyTable = ({ members, orders }: MyTableProps) => {
  return (
    <div>
      <h1>My table</h1>
      <table border={1}>
        <tr>
          <th rowSpan={2}>Name</th>
          <th rowSpan={2}>OwnerName</th>
          <th rowSpan={2}>Amount</th>
          <th colSpan={members.length}>User</th>
        </tr>
        <tr>
          {members?.map((member) => (
            <td>
              {member["name"]}
              <button>delete</button>
            </td>
          ))}
        </tr>
        {orders?.map((order) => {
          const amount = Number(order["amount"]);
          const memberSize = members.length;
          return (
            <tr>
              <td>{order["order_name"]}</td>
              <td>{order["owner_name"]}</td>
              <td>{order["amount"]}</td>
              <td>{amount / memberSize}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default MyTable;

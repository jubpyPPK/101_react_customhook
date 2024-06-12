import React from "react";

const Parents = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>My table</h1>
      <table border={1}>
        <tr>
          <td>Name</td>
          <td>Surname</td>
          <td>Action</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>{children}</td>
        </tr>
      </table>
    </div>
  );
};

export default Parents;
